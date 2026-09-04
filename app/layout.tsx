import type { Metadata } from "next";
import { Instrument_Serif, Sora, Space_Mono } from "next/font/google";
import { SiteHeader } from "./_components/site-header";
import { Footer } from "./_components/footer";
import { HoverSound } from "./_components/hover-sound";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

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
    "Mahansh Aditya is a software engineer who builds full-stack products, backend systems, and scalable applications from idea to production.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${sora.variable} ${instrumentSerif.variable} ${spaceMono.variable}`}
    >
      <body>
        <SiteHeader />
        <main className="pt-header">{children}</main>
        <Footer />
        <HoverSound />
      </body>
    </html>
  );
}
