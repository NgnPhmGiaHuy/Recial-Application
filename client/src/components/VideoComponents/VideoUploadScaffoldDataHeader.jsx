import { handleCalculateUploadStatus, handleFormatVideoDuration, handleFormatVideoSize } from "@/utils";

const VideoUploadScaffoldDataHeader = ({ startTimeRef, videoProps }) => {
    return (
        <div>
            <div className="mb-[10px] bg-white shadow-md rounded-xl overflow-hidden relative">
                <div className="px-[24px] pt-[24px] pb-[12px]">
                    <div className="inline-block">
                        <div className="max-w-[900px] min-h-[36px]">
                            <span className="block text-[24px] text-black text-left font-medium overflow-hidden tracking-[0.24px] relative leading-6">
                                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                                    { videoProps?.meta?.name }
                                </span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row items-center relative">
                            <div className="mr-[16px] flex flex-row items-center relative">
                                <div>
                                    <span className="block text-[15px] text-zinc-500 text-left font-normal relative leading-5">
                                        Size:
                                    </span>
                                </div>
                                <div>
                                    <span className="ml-[8px] block text-[17px] text-black text-left font-medium relative leading-5">
                                        {handleFormatVideoSize(videoProps?.meta?.size)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center relative">
                                <div>
                                    <span className="block text-[15px] text-zinc-500 text-left font-normal relative leading-5">
                                        Duration:
                                    </span>
                                </div>
                                <div>
                                    <span className="ml-[8px] block text-[17px] text-black text-left font-medium relative leading-5">
                                        {handleFormatVideoDuration(videoProps?.meta?.duration)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[21px] mt-[22px]">
                        <div className={`${videoProps?.downloadURL ? "text-lime-500" : "text-zinc-500"} flex flex-row items-center gap-2 relative`}>
                            <div className="w-[20px] h-[20px] flex items-center justify-center overflow-hidden relative">
                                { videoProps?.downloadURL ? (
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </i>
                                ) : (
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
                                        </svg>
                                    </i>
                                )}
                            </div>
                            <div>
                                <span className="block text-[16px] text-left font-normal relative leading-5">
                                    { videoProps?.downloadURL ? "Uploaded" : handleCalculateUploadStatus(videoProps, startTimeRef.current) }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-[24px] top-[18px] flex gap-2 absolute">
                    <div className="max-w-full w-full">
                        <div className="w-full h-[32px] pr-[6px] pl-[10px] flex flex-row items-center bg-black/[0.05] rounded-xl cursor-pointer relative">
                            <div>
                                <span className="block text-[16px] text-black text-left font-medium overflow-hidden relative leading-5">
                                    <span className="block overflow-hidden whitespace-nowrap text-ellipsis">
                                        Manage
                                    </span>
                                </span>
                            </div>
                            <div
                                className="w-[20px] h-[20px] flex items-center justify-center text-zinc-500 overflow-hidden relative">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                { videoProps?.uploadProgress > 0 && (
                    <div className="w-full h-[3px] bg-black/[0.05] relative">
                        <div className="h-full bg-lime-500" style={{width: `${videoProps.uploadProgress}%`}}></div>
                        <div className="right-[24px] bottom-[12px] absolute">
                            <span
                                className="block text-[24px] text-black text-center font-medium tracking-[0.24px] relative leading-7">
                                {videoProps?.uploadProgress?.toFixed(2)}%
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataHeader;