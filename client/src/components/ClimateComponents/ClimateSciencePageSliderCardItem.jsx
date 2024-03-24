import Image from "next/image";
import React, { forwardRef } from "react";

const ClimateSciencePageSliderCardItem = forwardRef(({ item }, ref) => {
    return (
        <div ref={ref}>
            <div className="w-[285px] mr-[12px] flex flex-shrink-0 grow-0 basis-[285px]">
                <div className="w-full flex rounded-xl bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] overflow-hidden relative">
                    <div className="w-full min-h-[275px] flex flex-col relative">
                        <div className="m-[-6px] flex flex-row flex-nowrap items-stretch justify-between relative">
                            <div className="p-[6px] flex flex-col flex-shrink grow basis-0 relative">
                                <div className="w-full h-[154px] flex items-center justify-center overflow-hidden relative">
                                    <Image src={item.image} alt={`${item.image}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </div>
                        <div className="m-[-4px] px-[16px] pt-[16px] flex flex-row flex-nowrap items-stretch justify-between relative">
                            <div className="px-[4px] pt-[4px] pb-[8px] flex flex-col flex-shrink grow basis-0 relative">
                                { item?.title && (
                                    <div className="mt-[-4px]">
                                        <span className="block text-[16px] text-black text-left font-bold break-words relative leading-5">
                                            <span className="overflow-hidden relative">
                                                {item.title}
                                            </span>
                                        </span>
                                    </div>
                                ) }
                                { item?.description && (
                                    <span className="block text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            {item.description}
                                        </span>
                                    </span>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ClimateSciencePageSliderCardItem;