import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liquid Transitions Showcase",
  description:
    "Explore premium liquid transition effects with live demos and implementation guides."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
