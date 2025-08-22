'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HomeIcon,
  ShoppingBagIcon,
  PlusIcon,
  MegaphoneIcon,
  HandCoinsIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const inActiveClass = 'bg-white hover:bg-neutral-100 shadow-none';
  const [pathActive, setPathActive] = useState<string>('/');

  useEffect(() => {
    console.log('pathname', pathname)
    if (!pathname) return;
    setPathActive(pathname)
  }, [pathname])
  

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        bottom-0
        w-[80px]
        flex
        flex-col
        items-center
        gap-[100px]
        py-6
      "
    >
      <div className="w-[44px] h-[44px] bg-neutral-100 rounded-full"></div>
      <div className="flex flex-col gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/marketplace">
              <Button 
                variant="secondary" 
                size="icon" 
                className={`size-12 ${pathActive !== '/' && inActiveClass}`}
              >
                <HomeIcon />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Beranda</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/shop">
              <Button
                variant="secondary"
                size="icon"
                className={`size-12 ${pathActive !== '/shop' && inActiveClass}`}
              >
                <ShoppingBagIcon />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Belanja</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/create">
              <Button
                variant="secondary"
                size="icon"
                className={`size-12 ${pathActive !== '/create' && inActiveClass}`}
              >
                <PlusIcon />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Buat</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/info">
              <Button
                variant="secondary"
                size="icon"
                className={`size-12 ${pathActive !== '/info' && inActiveClass}`}
              >
                <MegaphoneIcon />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Informasi</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/finance">
              <Button
                variant="secondary"
                size="icon"
                className={`size-12 ${pathActive !== '/finance' && inActiveClass}`}
              >
                <HandCoinsIcon />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Keuangan</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
}
