import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Cục Thuỷ Lợi - Hệ thống thông tin bảo vệ công trình và chất lượng nước",
  description: "Hệ thống thông tin bảo vệ công trình và chất lượng nước của Cục Thủy Lợi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable}`}>
      <body>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
