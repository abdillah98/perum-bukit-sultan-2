import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col gap-[40px]">
        <div className="w-full h-0 pb-[50%] overflow-hidden bg-neutral-100 !rounded-xl">
            {/* content here...  */}
        </div>

        <div className="">
            <h2 className="font-bold text-xl mb-3">Lates Events</h2>
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 h-0 pb-[65%] overflow-hidden bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-0 pb-[65%] overflow-hidden bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-0 pb-[65%] overflow-hidden bg-neutral-100 rounded-lg"></div>
            </div>
        </div>

        <div className="">
            <h2 className="font-bold text-xl mb-3">Best Items</h2>
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
            </div>
        </div>

        <div className="">
            <h2 className="font-bold text-xl mb-3">Populer Creator</h2>
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 flex items-center gap-3 border border-neutral-200 p-3 rounded-lg">
                    <div className="w-[60px] h-[60px] rounded-full bg-neutral-100"></div>
                    <div>
                        <div className="font-semibold">Degenheim</div>
                        <div className="text-xs">234 items</div>
                    </div>
                </div>
                <div className="col-span-1 flex items-center gap-3 border border-neutral-200 p-3 rounded-lg">
                    <div className="w-[60px] h-[60px] rounded-full bg-neutral-100"></div>
                    <div>
                        <div className="font-semibold">Degenheim</div>
                        <div className="text-xs">234 items</div>
                    </div>
                </div>
                <div className="col-span-1 flex items-center gap-3 border border-neutral-200 p-3 rounded-lg">
                    <div className="w-[60px] h-[60px] rounded-full bg-neutral-100"></div>
                    <div>
                        <div className="font-semibold">Degenheim</div>
                        <div className="text-xs">234 items</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="">
            <h2 className="font-bold text-xl mb-3">New Items</h2>
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
                <div className="col-span-1 h-[200px] bg-neutral-100 rounded-lg"></div>
            </div>
        </div>
    </div>
  )
}
