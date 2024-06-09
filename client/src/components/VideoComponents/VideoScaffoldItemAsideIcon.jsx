
const VideoScaffoldItemAsideIcon = ({ icon, number, onClick }) => {
    return (
        <div onClick={onClick} className="select-none">
            <div className="flex flex-col items-center cursor-pointer hover:text-zinc-500 transition-all">
                <div className="w-[42px] h-[42px] flex flex-col items-center justify-center overflow-hidden relative">
                    <i>
                        { icon }
                    </i>
                </div>
                { number && (
                    <div className="mt-[4px] flex items-center">
                        <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                { number }
                            </span>
                        </span>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default VideoScaffoldItemAsideIcon;