"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const AsideSettingItem = ({ itemProps }) => {
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
            <Link href={itemProps.link}>
                <div className={`${active ? "text-lime-500 before:w-[2px] before:h-[48px] before:left-0 before:absolute before:bg-lime-500" : "text-black"} lg:p-[24px] px-[12px] py-[24px] flex items-center bg-white`}>
                    <div className="lg:mr-[16px]">
                        <div className="w-[24px] h-[24px] overflow-hidden relative">
                            { itemProps.icon }
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <span className="text-[20px] text-left font-semibold break-words relative leading-6">
                            <span className="overflow-hidden relative">
                                { itemProps.title }
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default AsideSettingItem;