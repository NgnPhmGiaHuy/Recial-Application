"use client"

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { shallowEqual, useSelector } from "react-redux";

import { PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon, XMarkIcon } from "@/components";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false, mode: "cors" });

const VideoPageScaffoldItem = ({ progress }) => {
    const router = useRouter();
    const hasSeeked = useRef(null);

    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const mediaProps = useSelector(state => state.media, shallowEqual);

    const handleSetIsPlaying = (event) => {
        event.preventDefault();

        return setIsPlaying((prev) => !prev);
    }

    const handleSetIsMute = (event) => {
        event.preventDefault();

        return setIsMuted((prev) => !prev);
    }

    const handleOnReady = (player) => {
        if (progress && !hasSeeked.current) {
            player.seekTo(progress);
            hasSeeked.current = true;
        }
    };

    const handleOnStart = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };

    return (
        <>
            <div className="w-full h-full cursor-pointer relative">
                <div className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden relative">
                    <div className="w-full h-full top-0 left-0 absolute z-20" onClick={handleSetIsPlaying}>
                        <ReactPlayer
                            url={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/video/${mediaProps._id}`}
                            volume={1}
                            muted={isMuted}
                            playing={isPlaying}
                            onReady={handleOnReady}
                            onStart={handleOnStart}
                            loop={true}
                            light={true}
                            controls={true}
                            width="100%"
                            height="100%"
                            crossOrigin="anonymous"
                        />
                    </div>
                </div>
            </div>
            <div className={`${isPlaying ? "opacity-0" : "opacity-100"} top-1/2 left-1/2 pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 z-50`}>
                <div className="w-[82px] h-[82px] p-[12px] flex items-center justify-center rounded-full text-white bg-black/50 overflow-hidden relative">
                    <PlayIcon fill="currentColor" stroke="currentColor" width={70} height={70} />
                </div>
            </div>
            <div className="top-[20px] left-[20px] flex items-center justify-center cursor-pointer absolute z-20">
                <div onClick={() => router.back()}>
                    <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full overflow-hidden text-white bg-black/50 relative hover:bg-black/25 transition-all">
                        <XMarkIcon fill="none" stroke="currentColor" strokeWidth={3} width={28} height={28} />
                    </div>
                </div>
            </div>
            <div className="bottom-[20px] right-[20px] flex items-center justify-center cursor-pointer absolute">
                <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full overflow-hidden text-white bg-black/50 relative hover:bg-black/25 transition-all z-20" onClick={handleSetIsMute}>
                    { isMuted ? (
                        <SpeakerXMarkIcon fill="none" stroke="currentColor" width={28} height={28} />
                    ) : (
                        <SpeakerWaveIcon fill="none" stroke="currentColor" width={28} height={28} />
                    ) }
                </div>
            </div>
        </>
    );
};

export default VideoPageScaffoldItem;