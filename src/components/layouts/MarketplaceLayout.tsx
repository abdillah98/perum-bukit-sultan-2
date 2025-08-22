import React from 'react'
import Navbar from '../Navbar'

export default function MarketplaceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative">
            <Navbar />
            <div className="ml-[80px] px-6 md:px-0 py-6">
                <main className="max-w-full md:max-w-2xl mx-auto">
                    <div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
