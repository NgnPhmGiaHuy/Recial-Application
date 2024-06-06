const VideoUploadScaffoldInput = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <div className="h-[500px] flex flex-col items-center justify-center bg-zinc-100 border border-dashed border-zinc-200 rounded-xl cursor-pointer relative">
                <div className="flex flex-col gap-2">
                    <div className="w-[72px] h-[72px] mx-auto opacity-35 relative">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[72px] h-[72px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
                            </svg>
                        </i>
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