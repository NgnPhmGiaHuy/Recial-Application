import Link from "next/link";

import { AsideScaffoldGroupNavigationItem } from "@/components";

import ASIDE_GROUP from "@/constants/AsideConstants/AsideGroupConstants";

const AsideScaffoldGroupNavigation = () => {
    return (
        <div className="mt-[4px] mb-[8px]">
            <div className="flex flex-col flex-shrink relative">
                { ASIDE_GROUP.map((value, index) => (
                    <AsideScaffoldGroupNavigationItem key={index} itemProps={value}/>
                )) }
                <div className="mx-[16px] mt-[8px]">
                    <div className="h-[36px] px-[12px] flex flex-row flex-shrink-0 items-center justify-center rounded-xl bg-lime-200 hover:bg-lime-300 text-lime-900 hover:text-black cursor-pointer relative transition-all">
                        <Link href="/groups/create">
                            <div className="w-full flex flex-row items-center justify-center relative transition-all">
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <div className="w-[16px] h-[16px] flex items-center justify-center relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <span className="block text-[15px] text-center font-semibold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Create new group
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideScaffoldGroupNavigation;