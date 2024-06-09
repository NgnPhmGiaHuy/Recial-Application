"use client"

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { shallowEqual, useSelector } from "react-redux";

import { VideoScaffoldItemAsideIcon } from "@/components";

import VIDEO_ASIDE_BUTTON from "@/constants/VideoConstants/VideoScaffoldItemAsideConstant";

const VideoScaffoldItemAside = ({ videoProps, progress }) => {
    const router = useRouter();
    const userProps = useSelector((state) => state.user, shallowEqual);

    const button = VIDEO_ASIDE_BUTTON(videoProps, userProps?.user?._id, progress, router);

    return (
        <div className="w-[60px] ml-[12px] mb-[4px] flex flex-col flex-shrink-0 grow-0 gap-3 items-center justify-end overflow-visible static">
            { button.map((value, index) => (
                <VideoScaffoldItemAsideIcon key={index} icon={value.icon} number={value.number} onClick={value.onClick}/>
            )) }
            <div className="w-[42px] h-[42px] border border-solid border-black rounded-md overflow-hidden relative">
                <Link href={`/${videoProps?.user?._id}`}>
                    <div className="w-full h-full block bg-white relative">
                        <div className="w-full pb-[100%] block overflow-hidden relative">
                            <div className="top-0 right-0 bottom-0 left-0 absolute">
                                <div className="w-full h-full overflow-hidden relative">
                                    <Image src={videoProps?.user?.profile?.profile_picture_url} alt={`${videoProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default VideoScaffoldItemAside;