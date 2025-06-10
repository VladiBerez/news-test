import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "News Portal",
  description: "A modern news portal built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
