import type { Metadata } from "next";
import "./globals.css";
import { LayoutOne } from "@/layouts/layout-one";

export const metadata: Metadata = {
  title: "ChemTradeAsia",
  description: "ChemTradeAsia React storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutOne>{children}</LayoutOne>
      </body>
    </html>
  );
}
