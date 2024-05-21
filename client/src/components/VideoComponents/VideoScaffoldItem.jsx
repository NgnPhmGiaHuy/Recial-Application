"use client"

import dynamic from "next/dynamic";

import { useVideoScaffold } from "@/hooks";
import { VideoScaffoldItemAside, VideoScaffoldItemControl, VideoScaffoldItemInfo } from "@/components";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false, mode: "cors"});

const VideoScaffoldItem = ({ videoProps, globalMute, setGlobalMute, autoPlay = false }) => {
    const { videoRef, playerRef, isPlaying, progress, duration, seeking, handleSetIsPlaying, handleSetGlobalMute, handleProgress, handleDuration, handleSeekMouseDown, handleSeekMouseUp, handleSeekChange, handleNavigation } = useVideoScaffold({ autoPlay, videoProps, setGlobalMute })

    return (
        <div ref={videoRef} className="max-w-[700px] h-[calc(-80px+100vh)] mx-auto py-[20px] flex flex-row items-start snap-always snap-start relative">
            <div className="ml-[68px] w-[624px] h-full flex flex-col flex-grow flex-shrink basis-[624px]">
                <VideoScaffoldItemInfo videoProps={videoProps}/>
                <div className="w-full h-full flex flex-row items-center justify-center overflow-hidden relative">
                    <div className="w-full h-full flex relative">
                        <div className="h-full bg-black/75 rounded-xl overflow-hidden relative" onClick={handleNavigation}>
                            <ReactPlayer url={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/video/${videoProps._id}`} ref={playerRef} crossOrigin="anonymous" playing={isPlaying}
                                         controls={false} muted={globalMute} volume={1} loop={true} width="100%" height="100%" onProgress={handleProgress} onDuration={handleDuration}/>
                            <VideoScaffoldItemControl duration={duration} progress={progress} isPlaying={isPlaying} isMuted={globalMute} handleSetIsMute={handleSetGlobalMute} handleSetIsPlaying={handleSetIsPlaying} handleSeekChange={handleSeekChange} handleSeekMouseUp={handleSeekMouseUp} handleSeekMouseDown={handleSeekMouseDown}/>
                        </div>
                        <VideoScaffoldItemAside videoProps={videoProps} progress={progress}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoScaffoldItem;
