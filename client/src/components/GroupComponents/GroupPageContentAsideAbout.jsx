import Link from "next/link";

import { GroupPageContentAsideAboutItem } from "@/components";

const GroupPageContentAsideAbout = ({ groupProps }) => {
    return (
        <div className="w-full mb-[16px] flex relative">
            <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden">
                <div className="pb-[16px] flex flex-col relative">
                    <div className="flex flex-col grow relative">
                        <div className="mb-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="pt-[20px] pb-[4px] flex flex-col flex-shrink-0 relative">
                                <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                                    <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            About
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[4px] flex flex-col flex-shrink-0 relative">
                            <GroupPageContentAsideAboutItem groupProps={groupProps}/>
                            <div className="px-[16px] pt-[8px]">
                                <Link href="">
                                    <div className="h-[36px] px-[12px] flex flex-row flex-shrink-0 items-center justify-center rounded-xl bg-zinc-300 relative hover:bg-zinc-400 transition-all">
                                        <span className="block text-[15px] text-black text-center font-semibold break-words relative leading-5">
                                            <span className="overflow-hidden relative">
                                                Learn more
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContentAsideAbout;