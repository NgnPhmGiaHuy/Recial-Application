"use client"

import Link from "next/link";
import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

import { formatDate } from "@/utils";
import { useMediaCheckFollow } from "@/hooks";
import { MediaPageScaffoldHeaderReaction, MediaPageScaffoldHeaderText, MediaPageScaffoldHeaderURL } from "@/components";

const MediaPageScaffoldHeader = () => {
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const { hasFollow } = useMediaCheckFollow();

    return (
        <div className="mx-[-32px]">
            <div className="mx-[20px] p-[16px] rounded-md bg-zinc-100">
                <div className="mb-[16px] flex flex-row items-center relative">
                    <div className="mr-[12px] flex-[0_0_40px]">
                        { mediaProps?.user?.profile?.profile_picture_url && (
                            <Link href={`/${mediaProps?.user?._id}`}>
                                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full overflow-hidden relative">
                                    <Image src={mediaProps?.user?.profile?.profile_picture_url} alt={`${mediaProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </Link>
                        ) }
                    </div>
                    <div className="mr-[12px] flex-[1_1_auto] overflow-hidden">
                        <Link href={`/${mediaProps?.user?._id}`}>
                            {mediaProps?.user?.profile?.username || mediaProps?.user?.profile?.firstname ? (
                                <span className="block text-[18px] text-black text-left font-bold break-words relative leading-5 hover:underline">
                                    <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                        {mediaProps?.user?.profile?.username || mediaProps?.user?.profile?.firstname + " " + mediaProps?.user?.profile?.lastname}
                                    </span>
                                </span>
                            ) : null}
                        </Link>
                        <div className="flex flex-row items-center relative">
                            { mediaProps?.media_type?.toLowerCase() === "video" ? (
                                <>
                                    <span className="text-[14px] text-black text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                            Music
                                        </span>
                                    </span>
                                    <span className="mx-[4px]">·</span>
                                </>
                            ) : null}
                            { mediaProps?.updated_at && (
                                <span className="text-[14px] text-black text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        { formatDate(mediaProps?.updated_at) }
                                    </span>
                                </span>
                            ) }
                        </div>
                    </div>
                    { !hasFollow && (
                        <div>
                            <div className="min-w-[96px] h-[36px] px-[15px] flex items-center justify-center rounded-md bg-lime-500 cursor-pointer relative hover:bg-lime-700 transition-all">
                                <span className="text-[16px] text-white text-left font-normal relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Follow
                                    </span>
                                </span>
                            </div>
                        </div>
                    ) }
                </div>
                <div>
                    <MediaPageScaffoldHeaderText/>
                </div>
            </div>
            <div className="px-[32px] pt-[16px] flex flex-col overflow-visible">
                <MediaPageScaffoldHeaderReaction/>
                <div>
                    <MediaPageScaffoldHeaderURL/>
                </div>
            </div>
        </div>
    );
};

export default MediaPageScaffoldHeader;