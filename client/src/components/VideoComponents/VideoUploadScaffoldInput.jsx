import { CloudUpIcon } from "@/components";

const VideoUploadScaffoldInput = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <div className="h-[500px] flex flex-col items-center justify-center bg-zinc-100 border border-dashed border-zinc-200 rounded-xl cursor-pointer relative">
                <div className="flex flex-col gap-2">
                    <div className="w-[72px] h-[72px] mx-auto opacity-35 relative">
                        <CloudUpIcon fill="none" stroke="currentColor" width={72} height={72} />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 relative">
                        <div className="flex flex-col relative">
                            <span className="block text-[24px] text-black text-center font-bold relative leading-7">
                                Select a video to upload
                            </span>
                        </div>
                        <div className="flex flex-col relative">
                            <span className="block text-[16px] text-zinc-700 text-center font-normal relative leading-5">
                                Or drag and drop here
                            </span>
                        </div>
                        <div>
                            <div className="min-w-[108px] w-[200px] h-[40px] mt-[16px] px-[16px] flex items-center justify-center rounded-xl bg-lime-500 cursor-pointer relative hover:bg-lime-600 transition-all">
                                <div className="w-full flex items-center justify-center overflow-hidden relative">
                                    <span className="block text-[16px] text-center text-white font-medium relative leading-5">
                                        <span className="block whitespace-nowrap text-ellipsis overflow-hidden relative">
                                            Choose video
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

export default VideoUploadScaffoldInput;