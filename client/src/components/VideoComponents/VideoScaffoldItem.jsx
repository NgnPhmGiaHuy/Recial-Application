"use client"

import { useState, useRef, useEffect } from "react";

import { useGlobalMute } from "@/components/ProviderComponents/GlobalMuteProvider";
import { VideoScaffoldItemAside, VideoScaffoldItemInfo } from "@/components";

const VideoScaffoldItem = ({ videoProps, autoPlay = false }) => {
    const { globalMute, setGlobalMute } = useGlobalMute();
    const videoItemRef = useRef(null);

    const [videoMuted, setVideoMuted] = useState(true);
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const handleVideoVolumeClick = (e) => {
        e.stopPropagation();
        if (videoItemRef.current) {
            if (videoMuted) {
                setGlobalMute(false);
            } else {
                setGlobalMute(true);
            }

            videoItemRef.current.muted = !videoItemRef.current.muted;
            setVideoMuted(!videoMuted);
        }
    };

    const handleVideoPlayClick = () => {
        if (videoItemRef.current) {
            if (videoItemRef.current.paused) {
                videoItemRef.current.play();
                setIsVideoPlaying(true);
            } else {
                videoItemRef.current.pause();
                setIsVideoPlaying(false);
            }
        }
    };

    useEffect(() => {
        if (videoItemRef.current) {
            videoItemRef.current.muted = globalMute;
            setVideoMuted(globalMute);
        }
    }, [globalMute]);

    useEffect(() => {
        const video = videoItemRef.current;

        const handleVideoStateChange = () => {
            setIsVideoPlaying(!video.paused);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVideoVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        if (video) {
            video.addEventListener("play", handleVideoStateChange);
            video.addEventListener("pause", handleVideoStateChange);
            observer.observe(video);

            return () => {
                video.removeEventListener("play", handleVideoStateChange);
                video.removeEventListener("pause", handleVideoStateChange);
                observer.unobserve(video);
            };
        }
    }, [isVideoVisible]);

    useEffect(() => {
        const video = videoItemRef.current;

        if (isVideoVisible && video && video.paused) {
            video.play();
        } else if (!isVideoVisible && video && !video.paused) {
            video.pause();
        }
    }, [isVideoVisible]);

    return (
        <div className="w-full h-fit px-[32px] flex items-stretch justify-center snap-always snap-start relative">
            <div className="max-h-[inherit] flex">
                <div className="w-[540px] h-[960px]">
                    <div className="w-full flex justify-center relative">
                        {/*<Image src={Demo} alt="Video" fill={true} sizes="(max-width: 768px) 100vw" ref={imageRef} className="object-contain"/>*/}
                        <div className="w-full h-full flex rounded-md overflow-hidden">
                            <div className="w-full h-full block relative">
                                <div className="w-full h-full static" onClick={handleVideoPlayClick}>
                                    <video ref={videoItemRef} className="w-full h-full block" autoPlay={autoPlay} loop={true} muted={true} playsInline={true}>
                                        <source src={videoProps.video_url} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                    <div>
                                        <div className="w-full h-full top-0 flex flex-col absolute">
                                            <div className="top-0 right-0 bottom-0 left-0 cursor-pointer absolute">
                                                <div className="top-0 right-0 bottom-0 left-0 flex flex-col justify-between cursor-pointer absolute bg-gradient-to-r from-opacity-35 via-transparent to-opacity-35">
                                                    <div className="mt-[8px] mx-[8px] flex flex-col flex-shrink-0 grow-0 items-end justify-start overflow-visible bg-transparent static">
                                                        <div className="w-[32px] h-[32px] flex flex-row flex-shrink-0 items-center justify-center basis-auto text-white bg-black/25 select-none cursor-pointer rounded-full overflow-hidden relative hover:bg-black/10" onClick={handleVideoVolumeClick}>
                                                            {videoMuted ? (
                                                                <i>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                                                                    </svg>
                                                                </i>
                                                            ) : (
                                                                <i>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                                                        <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                                                                    </svg>
                                                                </i>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <VideoScaffoldItemInfo videoProps={videoProps}/>
                                                </div>
                                                <div className={`p-[16px] top-[calc(50%-36px)] left-[calc(50%-36px)] rounded-full bg-black/50 ${isVideoPlaying ? "opacity-0" : "opacity-100"} transform-none absolute transition-all`}>
                                                    <div className="p-[8px] flex items-center justify-center bg-transparent cursor-pointer relative">
                                                        <div className="flex flex-col items-center justify-center text-white">
                                                            <i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                                </svg>
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoScaffoldItemAside videoProps={videoProps}/>
            </div>
        </div>
    );
};

export default VideoScaffoldItem;