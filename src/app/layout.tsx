import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HousingLayout from "@/components/layouts/HousingLayout";
import MarketplaceLayout from "@/components/layouts/MarketplaceLayout";

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

  const isMarketplace = (process.env.MARKETPLACE_SESSION === 'true');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isMarketplace 
          ? <MarketplaceLayout>{children}</MarketplaceLayout> 
          : <HousingLayout>{children}</HousingLayout>
        }
      </body>
    </html>
  );
}
