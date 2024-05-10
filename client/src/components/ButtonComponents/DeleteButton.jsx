"use client"

import { useEffect, useState } from 'react';

const DeleteButton = ({ buttonRef, onClick }) => {
    const [clientWidth, setClientWidth] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    useEffect(() => {
        if (buttonRef?.current?.clientWidth) {
            setClientWidth(buttonRef.current?.clientWidth);
        }

        if (buttonRef?.current?.clientHeight) {
            setClientHeight(buttonRef.current?.clientHeight);
        }
    }, [buttonRef?.current])

    return (
        <div onClick={onClick}>
            <div className={buttonRef?.current && "mb-[16px] relative translate-x-0 translate-y-0 z-10"} style={{ "--tw-translate-x": -(clientWidth / 2) + "px", "--tw-translate-y": -clientHeight + "px", }}>
                <div className="rounded-xl bg-white shadow-[0_12px_28px_0_rgba(0,0,0,0.2),0_2px_4px_0_rgba(0,0,0,0.1)] relative">
                    <div>
                        <div className="flex flex-col grow items-stretch relative">
                            <div className="w-full mr-[32px] py-[8px] flex flex-col items-stretch relative">
                                <div className="flex flex-col grow relative">
                                    <div className="mx-[8px] py-[12px] px-[8px] flex flex-row flex-shrink-0 items-center cursor-pointer rounded-lg overflow-hidden relative hover:bg-zinc-100 transition-all">
                                        <div className="flex flex-row grow items-center justify-between">
                                            <div className="flex flex-col relative">
                                                <span className="text-[15px] text-black text-left font-normal break-words relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        Delete
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg height="21" viewBox="0 0 21 12" width="21" className="absolute right-0 bottom-[calc(100%-1)] scale-x-[1] scale-y-[1] translate-x-0 translate-y-0"  style={{ "--tw-translate-x": -(clientWidth / 2 - 21 / 2) + "px", "--tw-translate-y": (clientHeight - 21) + "px", }} fill="white">
                                <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteButton;