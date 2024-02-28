import Link from "next/link";
import Image from "next/image";

import { formatTimeAgoFull } from "@/utils";

const GroupScaffoldJoinItem = ({ groupProps }) => {
    return (
        <div className="max-w-[340px] min-w-[320px] p-[4px] flex flex-col flex-shrink grow basis-0 relative">
            <div className="p-[16px] flex flex-col justify-between bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-xl relative">
                <div className="flex flex-row items-center justify-between relative">
                    <div className="mr-[16px]">
                        <Link href={`/groups/${groupProps?._id}/`}>
                            <div className="w-[80px] h-[80px] flex flex-col rounded-lg outline outline-black/30 overflow-hidden relative">
                                <Image src={groupProps?.group_picture_url} alt={`${groupProps?.group_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-[20px] pr-[16px] flex flex-col flex-wrap grow items-start relative">
                        <div className="my-[-5px] flex flex-col">
                            <Link href={`/groups/${groupProps?._id}/`}>
                                <div className="flex items-center justify-center hover:underline transition-all">
                                    <span className="block text-[15px] text-black text-left font-semibold relative leading-5">
                                        <span className="overflow-hidden line-clamp-2 relative">
                                            {groupProps?.group_name}
                                        </span>
                                    </span>
                                </div>
                            </Link>
                            <div>
                                <span className="block text-[13px] text-zinc-500 text-left font-normal relative leading-4">
                                    <span className="overflow-hidden line-clamp-1 relative">
                                        Last activity {formatTimeAgoFull(groupProps?.updated_at)} ago
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-[110px] h-[40px] mt-[16px] flex items-center justify-between relative">
                    <Link href={`/groups/${groupProps?._id}/`} className="w-full flex flex-col justify-center relative">
                        <div className="h-[36px] px-[12px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-center rounded-xl text-lime-900 bg-lime-100 hover:bg-lime-200 hover:text-black transition-all">
                            <div className="w-full flex items-center justify-center">
                                <span className="block text-[15px] text-center font-semibold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        View group
                                    </span>
                                </span>
                            </div>
                        </div>
                    </Link>
                    <div className="ml-[8px] flex items-center relative">
                        <div className="h-[36px] px-[16px] flex flex-row items-center justify-center rounded-xl cursor-pointer bg-zinc-100 hover:bg-zinc-200 relative transition-all">
                            <div className="w-[12px] h-[12px] flex items-center justify-center relative">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupScaffoldJoinItem;