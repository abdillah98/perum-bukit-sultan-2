import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { MoveLeft } from "lucide-react";
import Nav from "@/components/Nav";
// import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perum. Bukit Sultan 2",
  description: "Portal ini untuk memudahkan akses ke form dan data warga perumahan Bukit Sultan 2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="relative">
          <Navbar />
          <div className="ml-[80px] px-6 md:px-0 py-6">
            <main className="max-w-full md:max-w-2xl mx-auto">
              <div>
                {children}
              </div>
            </main>
          </div>
        </div> */}

        <div className="relative">
          <Nav />
          <div className="px-6 md:px-0 py-6">
            <main className="max-w-full md:max-w-md mx-auto">
              <div>{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
