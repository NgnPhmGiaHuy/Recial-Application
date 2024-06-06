const VideoUploadScaffoldListItem = ({ icon, title, subtitle }) => {
    return (
        <div>
            <div className="flex flex-1">
                <div className="pr-[16px] flex-shrink-0">
                    <div className="w-[24px] h-[24px] flex items-center justify-center text-zinc-500 overflow-hidden relative">
                        <i>
                            { icon }
                        </i>
                    </div>
                </div>
                <div className="pt-[2px]">
                    <div className="block">
                        <span className="block text-[16px] text-black text-left font-medium tracking-[0.25px] relative leading-5">
                            { title }
                        </span>
                    </div>
                    <div className="mt-[4px] block">
                        <span className="block text-[14px] text-zinc-500 text-left font-normal relative leading-5">
                              { subtitle }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldListItem;