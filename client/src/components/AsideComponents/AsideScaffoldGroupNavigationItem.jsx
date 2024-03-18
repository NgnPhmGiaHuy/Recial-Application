"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const AsideScaffoldGroupNavigationItem = ({ itemProps }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        const isClient = typeof window !== 'undefined';

        if (isClient) {
            setUrl(window.location.href || document.URL);
        }
    }, []);

    const active = url === process.env.NEXT_PUBLIC_CLIENT_URL + itemProps.link;

    return (
        <div className="px-[8px]">
            <Link href={itemProps.link}>
                <div className={`${active && "bg-zinc-200"} min-h-[44px] px-[8px] flex flex-row items-center justify-between rounded-xl overflow-hidden relative hover:bg-zinc-200 transition-all`}>
                    <div className={`${active && "bg-lime-500"} my-[8px] mr-[12px] flex flex-col self-start rounded-full relative`}>
                        <div className={`${active && "text-white"} w-[40px] h-[40px] flex items-center justify-center relative`}>
                            <i>
                                {itemProps.icon}
                            </i>
                        </div>
                    </div>
                    <div className="flex flex-row flex-shrink grow items-center justify-between relative">
                        <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {itemProps.title}
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default AsideScaffoldGroupNavigationItem;