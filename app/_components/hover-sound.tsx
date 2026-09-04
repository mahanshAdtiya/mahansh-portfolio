"use client";

import { useEffect } from "react";

const FREQUENCY = 1400;
const DURATION = 0.02;
const PEAK_GAIN = 0.02;
const THROTTLE_MS = 60;

const HOVER_TARGETS = '[data-sound="hover"]';
const CLICK_TARGETS = '[data-sound="click"]';

export function HoverSound() {
  useEffect(() => {
    let context: AudioContext | null = null;
    let lastPlayed = 0;

    async function play() {
      const now = performance.now();
      if (now - lastPlayed < THROTTLE_MS) return;
      lastPlayed = now;

      const ctx = (context ??= new AudioContext());
      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch {
          return;
        }
      }

      const state: AudioContextState = ctx.state;
      if (state !== "running") return;

      const { currentTime } = ctx;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(FREQUENCY, currentTime);

      gain.gain.setValueAtTime(PEAK_GAIN, currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, currentTime + DURATION);

      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(currentTime + DURATION);
    }

    function handlePointerOver(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;

      const target = (event.target as Element | null)?.closest?.(HOVER_TARGETS);
      if (!target) return;

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
