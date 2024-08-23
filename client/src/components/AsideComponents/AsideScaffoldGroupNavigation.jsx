import Link from "next/link";

import { AsideScaffoldGroupNavigationItem, PlusIcon } from "@/components";

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
                                        <PlusIcon fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} />
                                    </div>
                                </div>
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <span className="block text-[15px] text-center font-semibold break-words relative leading-5">
                                        Create new group
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