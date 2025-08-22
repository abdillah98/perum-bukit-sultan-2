import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Buy and sell your nft item",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        {children}
    </div>
  );
}
