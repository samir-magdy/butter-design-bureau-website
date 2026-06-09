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
  title: "Amr — Portfolio",
  description: "Design & development portfolio",
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
