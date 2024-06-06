"use client"

import ReactPlayer from "react-player";

const VideoUploadScaffoldDataContentReview = ({ videoProps }) => {
    return (
        <>
            <div className="flex-[0_0_305px]">
                <div className="flex flex-col items-center justify-center relative">
                    <div className="mb-[16px] flex items-center justify-center select-none relative">
                        <div className="h-[34px] p-[4px] flex flex-row items-center justify-center bg-black/[0.05] rounded-xl relative">
                            <div className="min-w-[90px] h-full flex items-center justify-center cursor-pointer relative">
                                <span className="block text-[14px] text-zinc-500 text-center font-medium relative leading-5">
                                    Feed
                                </span>
                            </div>
                            <div className="min-w-[90px] h-full flex items-center justify-center cursor-pointer relative">
                                <span className="block text-[14px] text-zinc-500 text-center font-medium relative leading-5">
                                    Profile
                                </span>
                            </div>
                            <div className="min-w-[90px] h-full flex items-center justify-center cursor-pointer bg-white rounded-md relative">
                                <span className="block text-[14px] text-black text-center font-medium relative leading-5">
                                    Web
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[292px] h-[164px] bg-transparent rounded-md overflow-hidden leading-none relative z-10" style={{ height: (292 / videoProps?.meta?.aspectRatio) + "px" }}>
                        <div className="min-w-full min-h-full w-full h-full top-0 left-0 bg-black absolute z-[-1]"></div>
                        <ReactPlayer url={URL.createObjectURL(videoProps.data)} controls crossOrigin="anonymous" playing={false} muted={true} loop={true} width="100%" height="100%"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoUploadScaffoldDataContentReview;