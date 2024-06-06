"use client"

import { useRef } from "react";

import { useCreateVideoData, useHandleUploadVideo } from "@/hooks";
import { VideoUploadScaffoldData, VideoUploadScaffoldInput, VideoUploadScaffoldList } from "@/components";

const VideoUploadScaffold = () => {
    const inputRef = useRef(null);

    const { handleCreateVideo } = useCreateVideoData();
    const { startTimeRef, videoProps, setVideoProps, handleFileChange, handleConfirmUpload, handleDiscardVideoUpload } = useHandleUploadVideo();

    const handleSubmitVideo = async () => {
        await handleCreateVideo({ videoProps, handleConfirmUpload });
    }

    return (
        <div className="w-full h-full overflow-auto relative">
            <div className="max-w-[1200px] h-full mx-auto relative">
                <div className={`${videoProps.data ? "pb-[240px]" : ""} w-[90%] mx-auto pt-[16px] relative`}>
                    { videoProps.data ? (
                        <VideoUploadScaffoldData startTimeRef={startTimeRef} videoProps={videoProps} setVideoProps={setVideoProps} handleCreateVideo={handleSubmitVideo} handleDiscardVideoUpload={handleDiscardVideoUpload}/>
                    ) : (
                        <div className="p-[32px] bg-white shadow-md rounded-xl relative">
                            <div className="mt-[16px] mb-[-8px]">
                                <div>
                                    <input ref={inputRef} type="file" accept="video/*" className="hidden" onChange={handleFileChange}/>
                                    <VideoUploadScaffoldInput onClick={() => inputRef.current.click()}/>
                                    <VideoUploadScaffoldList/>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffold;