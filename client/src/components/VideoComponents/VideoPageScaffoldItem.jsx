"use client"

import {useRef, useState} from 'react';

const VideoPageScaffoldItem = ({videoProps}) => {
    const videoItemRef = useRef(null);

    const [videoMuted, setVideoMuted] = useState(true);
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);

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

    const handleVolumeClick = (e) => {
        e.stopPropagation();
        videoItemRef.current.muted = !videoItemRef.current.muted;
        setVideoMuted((prevVideoMuted) => !prevVideoMuted);
    };

    return (
        <>
            <div className="w-full h-full cursor-pointer relative">
                <div className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden relative">
                    <div className="w-full h-full top-0 left-0 absolute" onClick={handleVideoPlayClick}>
                        <video ref={videoItemRef} className="absolute h-full w-full object-cover" autoPlay={true} loop={true} controls={true} muted={true} playsInline={true} onClick={(e) => e.stopPropagation()}>
                            <source src={videoProps.video_url} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className={`${isVideoPlaying ? "opacity-0" : "opacity-100"} top-1/2 left-1/2 pointer-events-none absolute -translate-x-1/2 -translate-y-1/2`}>
                <div className="w-[82px] h-[82px] p-[12px] flex items-center justify-center rounded-full text-white bg-black/50 overflow-hidden relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[70px] h-[70px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </div>
            </div>
            <div className="top-[20px] left-[20px] flex items-center justify-center cursor-pointer absolute">
                <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full overflow-hidden text-white bg-black/50 relative hover:bg-black/25 transition-all">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </i>
                </div>
            </div>
            <div className="bottom-[20px] right-[20px] flex items-center justify-center cursor-pointer absolute">
                <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full overflow-hidden text-white bg-black/50 relative hover:bg-black/25 transition-all" onClick={handleVolumeClick}>
                    {videoMuted ? (
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        </i>
                    ) : (
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        </i>
                    )}
                </div>
            </div>
        </>
    );
};

export default VideoPageScaffoldItem;