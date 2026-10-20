import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Current",
  description: "A guided first action for operators exploring storage, electrification, and better energy intelligence.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
