import type { Metadata } from "next";
import { Instrument_Serif, Sora, Space_Mono } from "next/font/google";
import "./globals.css";

/**
 * next/font runs at BUILD time, not runtime: Next downloads these woff2 files,
 * serves them from our own domain, and generates the @font-face CSS itself.
 * No request ever leaves for fonts.gstatic.com.
 *
 * These calls must stay at module scope with literal arguments — an SWC
 * transform reads them statically to decide what to download. They never run.
 */

// Variable font: one file covers 300-600, so no `weight` needed.
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

// Static font: `weight` is required. Design uses both roman and italic.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Mahansh Aditya — Software Engineer",
  description:
    "A portfolio for mahansh adity",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${sora.variable} ${instrumentSerif.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
