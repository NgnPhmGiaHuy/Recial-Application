import Link from "next/link";
import Image from "next/image";

import { ArrowUpRightOnSquareIcon, SuggestGroupMember } from "@/components";

const SuggestGroup = ({ groupProps }) => {
    return (
        <section className="flex flex-col rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="w-full h-full p-[12px] relative">
                <div className="w-full py-[8px] flex flex-row flex-auto items-center justify-between border-b border-solid border-zinc-200 relative">
                    <div className="flex flex-col items-center relative">
                        <div className="before:w-[3px] before:h-full before:left-[-12px] before:rounded-md before:bg-lime-500 before:absolute">
                            <span className="block text-[14px] text-left text-black font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Suggest Group
                                </span>
                            </span>
                        </div>
                    </div>
                    <Link href="/groups/suggest-group">
                        <span className="block text-[14px] text-left text-lime-500 font-semibold break-words relative leading-5 hover:text-lime-700">
                            See all
                        </span>
                    </Link>
                </div>
            </div>
            <div className="w-full h-full p-[12px] relative">
                <div className="w-full py-[8px] flex flex-col justify-between relative">
                    <Link href={`/groups/${groupProps?._id}`} className="w-full h-[200px] rounded-lg border border-solid border-zinc-200 overflow-hidden group relative">
                        <Image src={groupProps?.group_picture_url} alt={`${groupProps?.group_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="p-[4px] rounded-xl object-cover"/>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
                    </Link>
                    <SuggestGroupMember groupProps={groupProps} />
                    <div className="flex flex-col items-center justify-between relative">
                        <div className="w-full h-full flex flex-col flex-shrink grow basis-auto relative">
                            <div className="flex flex-col justify-center cursor-pointer">
                                <Link href={`/groups/${groupProps?._id}`}>
                                    <div className="h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-xl bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                        <div className="mx-[3px] flex flex-shrink-0 items-center justify-center relative">
                                            <span className="block text-[15px] text-black font-semibold break-words relative leading-5">
                                                <ArrowUpRightOnSquareIcon/>
                                            </span>
                                        </div>
                                        <div className="mx-[3px] flex flex-shrink items-center justify-center relative">
                                            <span className="block text-[15px] text-black font-semibold break-words relative leading-5">
                                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                                    {groupProps?.group_name}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuggestGroup;