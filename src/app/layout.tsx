import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import Fathom from '@/lib/fathom';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Randy Oest • Make your website feel human, helpful, and delightful",
  description: "Turning tangled content into clarity, messy ideas into strategy, and chaos into calm—all designed for impact and delivered with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased font-base text-slate-700`}
      >
        <Fathom />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
