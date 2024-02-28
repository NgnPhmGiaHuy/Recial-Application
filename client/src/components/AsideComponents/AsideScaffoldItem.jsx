"use client"

import { useEffect, useState } from "react";

const AsideScaffoldItem = ({ itemProps }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        const isClient = typeof window !== 'undefined';

        if (isClient) {
            setUrl(window.location.href || document.URL);
        }
    }, []);

    const active = url === process.env.NEXT_PUBLIC_CLIENT_URL + itemProps.link;

    return (
        <li>
            <div>
                <a href={itemProps.link} className="block rounded-xl hover:bg-zinc-100 transition-all">
                    <div className="min-h-[48px] px-[8px] flex flex-row items-center justify-between relative">
                        <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                            <div className={`${active ? "bg-lime-500 text-white" : "bg-zinc-200"} w-[40px] h-[40px] flex flex-row items-center justify-center rounded-full overflow-hidden relative`}>
                                <i>{itemProps.icon}</i>
                            </div>
                        </div>
                        <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                            <div className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                                <div className="my-[-5px] flex flex-col">
                                    <div className="my-[5px]">
                                        <span className="block text-[16px] text-black text-left font-medium break-words leading-5">
                                            <span className="overflow-hidden line-clamp-2 relative">
                                                {itemProps.title}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {itemProps.chevronRight ? (
                            <div className="flex flex-row items-center relative">
                                <div className="mr-[12px] flex flex-col self-center relative">
                                    <div className="w-[32px] h-[32px] flex flex-row items-center justify-center cursor-pointer relative transition-all">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </a>
            </div>
        </li>
    );
};

export default AsideScaffoldItem;