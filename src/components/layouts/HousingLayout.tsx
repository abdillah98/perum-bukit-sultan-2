import React from 'react'
import Nav from '../Nav';

export default function HousingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative">
            <Nav />
            <div className="px-6 md:px-0 py-6">
                <main className="max-w-full md:max-w-md mx-auto mb-8">
                    <div>{children}</div>
                </main>
                <div>
                    <div className="text-center text-xs">Created & Developed by Bukit Sultan II.</div>
                    <div className="text-center text-xs">Made with ❤.</div>
                </div>
            </div>
        </div>
    )
}
