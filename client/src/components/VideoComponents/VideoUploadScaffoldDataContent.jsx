import { VideoUploadScaffoldDataContentDescription, VideoUploadScaffoldDataContentPrivacy, VideoUploadScaffoldDataContentReview, VideoUploadScaffoldDataContentThumbnail, VideoUploadScaffoldDataContentUserInteraction } from "@/components";

const VideoUploadScaffoldDataContent = ({ videoProps, setVideoProps, handleCreateVideo, handleDiscardVideoUpload }) => {
    return (
        <div>
            <div className="w-full p-[24px] bg-white rounded-xl overflow-hidden relative">
                <div className="flex flex-row-reverse gap-[45px]">
                    <VideoUploadScaffoldDataContentReview videoProps={videoProps}/>
                    <div className="flex-1">
                        <VideoUploadScaffoldDataContentDescription videoProps={videoProps} setVideoProps={setVideoProps}/>
                        <VideoUploadScaffoldDataContentThumbnail videoProps={videoProps}/>
                        <VideoUploadScaffoldDataContentPrivacy videoProps={videoProps} setVideoProps={setVideoProps}/>
                        <VideoUploadScaffoldDataContentUserInteraction videoProps={videoProps} setVideoProps={setVideoProps}/>
                        <div className="h-[1px] mt-[24px]">
                            <div className="w-[1080px] h-[1px] left-0 right-0 bg-black/[0.05] absolute"></div>
                        </div>
                        <div className="flex mt-[24px] gap-4">
                            <div onClick={handleCreateVideo}>
                                <div className="min-w-[124px] h-[48px] px-[24px] inline-flex items-center justify-center rounded-xl bg-lime-500 text-white cursor-pointer relative hover:bg-lime-600 transition-all">
                                    <span className="block text-[16px] text-center font-medium tracking-[0.15px] overflow-hidden relative leading-5">
                                        <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                                            Post
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div onClick={handleDiscardVideoUpload}>
                                <div className="min-w-[124px] h-[48px] px-[24px] inline-flex items-center justify-center rounded-xl bg-black/[0.05] to-black cursor-pointer relative hover:bg-black/[0.1] transition-all">
                                    <span className="block text-[16px] text-center font-medium tracking-[0.15px] overflow-hidden relative leading-5">
                                        <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                                            Discard
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataContent;