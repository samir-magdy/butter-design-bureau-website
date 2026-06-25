import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aeonik = localFont({
  src: [
    { path: "../public/fonts/Aeonik-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Aeonik-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Aeonik-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Aeonik-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://butterdesignbureau.com"),
  title: {
    template: "%s | Butter Design Bureau",
    default: "Butter Design Bureau",
  },
  description:
    "Butter Design Bureau is a visual branding studio crafting internationally competitive brand identities, communication systems, and visual experiences. Based in Cairo. Built for the world.",
  openGraph: {
    images: [{ url: "/open-graph.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/open-graph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aeonik.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
