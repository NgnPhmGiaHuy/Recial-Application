import Link from "next/link";
import Image from "next/image";

import { MusicalNoteIcon } from "@/components";

const VideoScaffoldItemInfo = ({ videoProps }) => {
    return (
        <div className="flex justify-between gap-[10px]">
            <div className="left-0 absolute">
                <Link href={`/${videoProps?.user?._id}`}>
                    <div
                        className="w-[56px] h-[56px] flex items-center justify-center rounded-full overflow-hidden relative">
                        <Image src={videoProps?.user?.profile?.profile_picture_url}
                               alt={`${videoProps?.user?.profile?.profile_picture_url}-image`} fill={true}
                               sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </Link>
            </div>
            <div>
                <div className="flex flex-row items-center relative">
                    <Link href={`/${videoProps?.user?._id}`} className="group">
                        <span className="block text-[18px] text-left text-black font-extrabold break-words relative leading-6 group-hover:underline">
                            {videoProps?.user?.profile?.username || videoProps?.user?.profile?.firstname + " " + videoProps?.user?.profile?.lastname}
                        </span>
                    </Link>
                </div>
                <div className="w-full flex overflow-hidden relative">
                    <div className="w-full line-clamp-2 text-ellipsis relative">
                        <span className="text-[14px] text-black text-left leading-5">
                            <span className="overflow-hidden relative">
                                { videoProps?.video_title } &nbsp;
                            </span>
                            { videoProps?.tags?.map((value, index) => (
                                <Link href="" key={index} className="font-semibold hover:font-bold">#${value} &nbsp;</Link>
                            )) }
                        </span>
                    </div>
                </div>
                <div className="mb-[12px]">
                    <Link href="">
                        <div className="flex flex-row items-center justify-start bg-transparent overflow-visible static">
                            <div className="w-[12px] h-[12px] mr-[4px] flex flex-shrink-0 grow-0 items-stretch justify-start self-auto bg-transparent text-black overflow-visible static">
                                <MusicalNoteIcon fill="none" stroke="currentColor" width={12} height={12} />
                            </div>
                            <div className="flex flex-row flex-shrink grow-0 items-stretch justify-start self-auto bg-transparent overflow-hidden">
                                <div className="flex flex-row flex-shrink-0 items-center translate-x-[0%]">
                                    <span className="block text-[14px] text-black text-left font-normal break-words relative leading-5 hover:underline">
                                        <span className="max-w-full block text-ellipsis whitespace-nowrap overflow-hidden relative">
                                            sonido original - Skime_zero
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <div className="h-[32px] px-[16px] flex flex-row flex-shrink-0 items-center justify-center basis-auto rounded-xl border border-solid border-lime-700 overflow-hidden cursor-pointer relative hover:bg-lime-500/20">
                    <span className="block text-[14px] text-lime-700 text-left font-semibold whitespace-pre-line break-words relative leading-5">
                        Follow
                    </span>
                </div>
            </div>
        </div>
    );
};

export default VideoScaffoldItemInfo;