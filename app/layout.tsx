import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balaji AI Lab — Gorakhpur's Digital Future",
  description: "Learn AI, Web Development, Digital Marketing and App Development in Gorakhpur. We also help local businesses go digital.",
  keywords: "computer institute gorakhpur, AI courses gorakhpur, web development eastern UP, digital marketing gorakhpur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
