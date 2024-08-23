import { CheckCircleIcon, ChevronDownIcon, CloudUpIcon } from "@/components";
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
                                    <CheckCircleIcon fill="none" stroke="currentColor" width={20} height={20} />
                                ) : (
                                    <CloudUpIcon fill="none" stroke="currentColor" width={20} height={20} />
                                ) }
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
                            <div className="w-[20px] h-[20px] flex items-center justify-center text-zinc-500 overflow-hidden relative">
                                <ChevronDownIcon fill="none" stroke="currentColor" strokeWidth={3} width={12} height={12} />
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