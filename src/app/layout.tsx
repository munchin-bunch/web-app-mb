import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesktopNavigation, TopBar } from "@/components";
import AbsWalletWrapper from "@/providers/AbsWalletWrapper";
import { ToastProvider } from "@/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phat Puff",
  description: "Munchin Bunch - Phat Puff th best game on Abstract chain",
  icons: {
    icon: "/favicon.jpg", // <-- path from public/
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <AbsWalletWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen flex flex-col px-5 lg:px-30 `}
        >
          <ToastProvider>
            <TopBar />
            <DesktopNavigation />
            <main className="flex-1">{children}</main>
            <footer className="">Footer</footer>
          </ToastProvider>
        </body>
      </AbsWalletWrapper>
    </html>
  );
}
