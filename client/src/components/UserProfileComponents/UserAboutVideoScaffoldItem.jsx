"use client"

import Link from "next/link";
import ReactPlayer from "react-player";
import { useRef, useState } from 'react';

import { formatTime, formatFullTimeAgo } from "@/utils";

const UserAboutVideoScaffoldItem = ({ videoProps }) => {
    const videoRef = useRef(null);

    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleHover = () => {
        if (videoRef.current) {
            setIsPlaying(true);
        }
    };

    const handleHoverOut = () => {
        if (videoRef.current) {
            setIsPlaying(false);
        }
    };

    const handleProgress = (state) => {
        setProgress(state.playedSeconds);
    };

    return (
        <div className="max-w-[280px] min-w-[280px] p-[4px] grow basis-0 overflow-hidden relative">
            <div className="m-[-6px] pt-[16px] flex flex-row flex-wrap items-stretch justify-between relative">
                <div className="p-[6px] flex flex-col flex-shrink grow basis-[calc(100%/3)] relative">
                    <div className="mb-[8px]">
                        <div className="border border-solid border-zinc-200 rounded-md overflow-hidden relative" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
                            <div className="w-full h-0 pt-[100%] relative">
                                <div className="top-0 right-0 bottom-0 left-0 flex flex-col absolute">
                                    <div className="w-full h-full top-0 right-0 bottom-0 left-0 absolute">
                                        <ReactPlayer url={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/video/${videoProps._id}`} ref={videoRef}  controls crossOrigin="anonymous" playing={isPlaying} muted={true} loop={true} width="100%" height="100%" onProgress={handleProgress}/>
                                    </div>
                                </div>
                                <div className="px-[6px] py-[3px] top-[8px] right-[8px] rounded-md pointer-events-none bg-black/25 drop-shadow-md absolute">
                                    <span className="block text-[15px] text-white text-left font-semibold break-words relative leading-5">
                                        { formatTime(videoProps?.video_duration - progress) }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between relative">
                        <div className="flex flex-col relative">
                            <div className="my-[8px]">
                                <Link href={`/video/?video=${videoProps._id}`}>
                                    <span className="block text-[15px] text-black text-left font-medium break-words relative leading-5">
                                        <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                            { videoProps.video_title }
                                        </span>
                                    </span>
                                </Link>
                            </div>
                            <div >
                                <div className="h-[16px] flex items-center gap-2 relative">
                                    <div className="flex items-center after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500 after:ml-2">
                                        <span className="block text-[13px] text-zinc-500 font-normal break-words relative leading-4">
                                            <span className="overflow-hidden relative">
                                                { formatFullTimeAgo(videoProps?.updated_at) }
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="block text-[13px] text-zinc-500 font-normal break-words relative leading-4">
                                            <span className="overflow-hidden relative">
                                                {videoProps.views_count} views
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAboutVideoScaffoldItem;

