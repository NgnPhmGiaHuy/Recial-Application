import Link from "next/link";

import { useFilterUserGroupsByRole } from "@/hooks";
import { asideGroupConstants } from "@/constants/AsideConstants/asideGroupConstants";
import { AsideScaffoldGroupItem, AsideScaffoldGroupNavigation } from "@/components";

const AsideScaffoldGroup = ({userProps}) => {
    const { managedGroups, joinedGroups } = useFilterUserGroupsByRole(userProps);

    return (
        <div className="max-w-[360px] flex flex-col flex-shrink grow basis-full relative">
            <div className="flex flex-col grow relative">
                <div className="mt-[4px] mb-[8px]">
                    <div className="flex flex-col flex-shrink relative">
                        {asideGroupConstants.map((value, index) => (
                            <AsideScaffoldGroupNavigation key={index} itemProps={value}/>
                        ))}
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
                                            <span
                                                className="block text-[15px] text-center font-semibold break-words relative leading-5">
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
                <div className="my-[12px] mx-[8px] border-b border-solid border-zinc-200"></div>
                <>
                    <div
                        className="m-[-6px] px-[16px] py-[12px] flex flex-row flex-shrink-0 flex-nowrap items-stretch justify-between">
                        <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                            <span
                                className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    (Groups you manage)
                                </span>
                            </span>
                        </div>
                    </div>
                    {managedGroups?.map((value, index) => (
                        <AsideScaffoldGroupItem key={index} groupProps={value}/>
                    ))}
                </>
                <div className="my-[12px] mx-[8px] border-b border-solid border-zinc-200"></div>
                <>
                    <div
                        className="m-[-6px] px-[16px] py-[12px] flex flex-row flex-shrink-0 flex-nowrap items-stretch justify-between">
                        <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                            <span
                                className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Groups you've joined
                                </span>
                            </span>
                        </div>
                        <div className="ml-[8px] p-[8px] flex flex-col flex-shrink-0 relative">
                            <a href="">
                                <span className="block text-[15px] text-lime-500 text-left font-normal break-words relative leading-5 hover:text-lime-700 transition-all">
                                    <span className="overflow-hidden relative">
                                        See all
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    {joinedGroups?.map((value, index) => (
                        <AsideScaffoldGroupItem key={index} groupProps={value}/>
                    ))}
                </>
            </div>
        </div>
    );
};

export default AsideScaffoldGroup;