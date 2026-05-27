import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credex | Verified AI & Cloud Credit Marketplace",
  description:
    "Buy and sell verified unused AI, cloud, and software credits with protected matching and guided transfer flows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
