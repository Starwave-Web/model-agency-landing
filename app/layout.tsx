import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";

const SFProDisplay = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Display-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Elluxe Management",
  description:
    "Maximize your earnings, save time, and focus only on what matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-primary-black" lang="en">
      <body className={SFProDisplay.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
