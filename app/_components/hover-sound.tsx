"use client";

import { useEffect } from "react";

/** 1400Hz sine, 20ms, gain 0.02 — a near-subliminal tick. */
const FREQUENCY = 1400;
const DURATION = 0.02;
const PEAK_GAIN = 0.02;
const THROTTLE_MS = 60;

// Opt in per element, never globally: data-sound="hover" or data-sound="click".
const HOVER_TARGETS = '[data-sound="hover"]';
const CLICK_TARGETS = '[data-sound="click"]';

/**
 * Mounted once in the root layout. Listening on the document rather than per
 * element means no component has to become a Client Component to make a
 * sound — opting one in is a markup-only change.
 */
export function HoverSound() {
  useEffect(() => {
    let context: AudioContext | null = null;
    let lastPlayed = 0;

    async function play() {
      const now = performance.now();
      if (now - lastPlayed < THROTTLE_MS) return;
      lastPlayed = now;

      // Audio cannot start without user activation, and hovering is not
      // activation. Clicks unlock it; hovers before the first click stay silent.
      const ctx = (context ??= new AudioContext());
      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch {
          return;
        }
      }
      // Read fresh: narrowing from the check above does not survive the await.
      const state: AudioContextState = ctx.state;
      if (state !== "running") return;

      const { currentTime } = ctx;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(FREQUENCY, currentTime);

      gain.gain.setValueAtTime(PEAK_GAIN, currentTime);
      // Ramping down rather than cutting off: an abrupt stop clicks.
      gain.gain.exponentialRampToValueAtTime(0.0001, currentTime + DURATION);

      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(currentTime + DURATION);
    }

    function handlePointerOver(event: PointerEvent) {
      // Touch fires pointerover on tap, which would double up with click.
      if (event.pointerType !== "mouse") return;

      const target = (event.target as Element | null)?.closest?.(HOVER_TARGETS);
      if (!target) return;

      // Moving between children of the same target is not a new hover.
      const from = event.relatedTarget as Node | null;
      if (from && target.contains(from)) return;

      void play();
    }

    function handlePointerDown(event: PointerEvent) {
      if ((event.target as Element | null)?.closest?.(CLICK_TARGETS)) void play();
    }

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerdown", handlePointerDown);
      void context?.close();
    };
  }, []);

  return null;
}
