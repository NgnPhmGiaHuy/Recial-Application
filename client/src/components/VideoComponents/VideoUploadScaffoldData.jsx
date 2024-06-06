"use client"

import { VideoUploadScaffoldDataContent, VideoUploadScaffoldDataHeader } from "@/components";

const VideoUploadScaffoldData = ({ startTimeRef, videoProps, setVideoProps, handleCreateVideo, handleDiscardVideoUpload }) => {
    return (
        <div>
            <VideoUploadScaffoldDataHeader startTimeRef={startTimeRef} videoProps={videoProps}/>
            { videoProps?.downloadURL && (
                <div>
                    <VideoUploadScaffoldDataContent videoProps={videoProps} setVideoProps={setVideoProps} handleCreateVideo={handleCreateVideo} handleDiscardVideoUpload={handleDiscardVideoUpload}/>
                </div>
            ) }
        </div>
    );
};

export default VideoUploadScaffoldData;