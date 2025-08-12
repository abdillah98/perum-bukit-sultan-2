"use client"

import { MoveLeft } from 'lucide-react'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Nav() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className="border-b border-neutral-100">
            <div className="max-w-full md:max-w-md mx-auto md:px-0 min-h-[70px] flex items-center md:px-0 px-6">
                {pathname !== '/' ?
                    <button onClick={() => router.back()} className="h-[40px] w-[40px] rounded-full flex items-center border border-neutral-100 justify-center hover:bg-neutral-50 focus:bg-neutral-50">
                        <MoveLeft size={18} />
                    </button> :    
                    <div className="flex gap-2 items-center">
                        <Image 
                            src="/busul-logo.png" 
                            alt="Logo Perum Bukit Sulta 2"
                            width={24}
                            height={24}
                        />
                        <div className="font-bold">Bukit Sultan 2</div>
                    </div>
                    }
            </div>
        </div>
    )
}
