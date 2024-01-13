import Link from "next/link";
import Image from "next/image";

import { formatTimeAgoFull } from "@/utils";

const AsideScaffoldGroupItem = ({ groupProps }) => {
    return (
        <div className="flex flex-col grow relative">
            <div className="px-[8px] flex flex-col flex-shrink-0 relative">
                <Link href={`/groups/${groupProps?._id}`}>
                    <div className="mx-[-6px] my-[-4px] p-[8px] flex flex-col items-stretch justify-center rounded-md hover:bg-zinc-100 relative transition-all">
                        <div className="flex flex-row flex-nowrap flex-shrink-0 items-center justify-between  relative">
                            <div className="flex flex-col flex-shrink-0 self-center relative">
                                <div className="px-[6px] py-[4px] flex flex-col flex-shrink-0 relative">
                                    <div className="w-[54px] h-[54px] bg-white rounded-md outline outline-zinc-200 overflow-hidden relative">
                                        <Image src={groupProps?.group_picture_url} alt={`${groupProps?.group_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap flex-shrink basis-auto items-center justify-between relative">
                                <div className="w-full px-[6px] py-[4px] flex flex-col flex-shrink-0 grow relative">
                                    <div className="my-[-5px] flex flex-col relative">
                                        <div className="">
                                            <span className="block text-[15px] text-black text-left font-medium break-words relative leading-5">
                                                <span className="overflow-hidden line-clamp-2 relative">
                                                    {groupProps?.group_name}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="">
                                            <span className="block text-[13px] text-zinc-500 text-left font-normal break-words relative leading-4">
                                                <span className="overflow-hidden line-clamp-1 relative">
                                                    Last activity {formatTimeAgoFull(groupProps?.updated_at)} ago
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AsideScaffoldGroupItem;