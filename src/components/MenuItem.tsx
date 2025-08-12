import Link from 'next/link';
import React from 'react'

export interface MenuItemsProps {
    name: string;
    icon: string;
    path: string;
    url: string;
    isActive: boolean;
}
const MenuItem: React.FC<MenuItemsProps> = ({
    name,
    icon,
    path,
    url,
    isActive,
}) => {

    if (!isActive) {
        return (
            <div className="h-full cols-span-1 text-center border rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 hover:border-neutral-300">
                <div className="text-[30px] p-2">{icon}</div>
                <div className="text-sm mb-2">{name}</div>
                <div className="bg-blue-500 text-xs text-white font-bold py-1 px-3 rounded-sm">Coming soon</div>
            </div>
        )
    }

    return (
        <>
            {url?.length > 0 && path.length === 0 ?
                <a href={url} target="_blank" rel="noopener" className="h-full cols-span-1 text-center border rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 hover:border-neutral-300">
                    <div className="text-[30px] p-2">{icon}</div>
                    <div className="text-sm">{name}</div>
                </a> :
                <Link href={path} className="h-full cols-span-1 text-center border rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 hover:border-neutral-300">
                    <div className="text-[30px] p-2">{icon}</div>
                    <div className="text-sm">{name}</div>
                </Link>
            }
        </>
    )
}

export default MenuItem;
