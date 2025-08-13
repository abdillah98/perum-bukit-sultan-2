"use client"

import { ChevronLeft, MoveLeft } from 'lucide-react'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import menusData from '@/data/menus.json';

export default function Nav() {
    const router = useRouter();
    const pathname = usePathname();

    const [pageTitle, setPageTitle] = useState<string>('...')

    useEffect(() => {
        if (!pathname) return;
        console.log('pathname', pathname)

        if (pathname !== '/') {
            const menus = menusData.find(menu => menu.path === pathname);
            console.log('menus', menus?.name)
            if(menus) setPageTitle(menus?.name);
        }
        else {
            setPageTitle('Bukit Sultan II')
        }
    }, [pathname])
    

    return (
        <div className="border-b border-neutral-100">
            <div className="max-w-full md:max-w-md mx-auto md:px-0 min-h-[70px] flex items-center md:px-0 px-6">
                <div className="flex gap-2 items-center">
                {pathname !== '/' ?
                    <button onClick={() => router.back()} className="h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-neutral-100 focus:bg-neutral-50">
                        <ChevronLeft size={18} />
                    </button> :    
                    <Image 
                        src="/busul-logo.png" 
                        alt="Logo Perum Bukit Sulta 2"
                        width={24}
                        height={24}
                    />
                    }
                    <div className="font-bold">{ pageTitle }</div>
                </div>
            </div>
        </div>
    )
}
