const MediaPageScaffoldHeaderReactionItem = ({ active, number, iconPath, bgColor, fillColor, strokeColor = "black", onClick }) => {
    return (
        <div className="mr-[20px] flex flex-row items-center">
            <div onClick={onClick} className="cursor-pointer select-none">
                <div style={{ backgroundColor: active ? bgColor : "rgba(244,244,245,1)" }}
                     className={`${!active && "hover:bg-zinc-200"} w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full overflow-hidden relative transition-all`}>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                             className={`${active ? "fill-red-500 border-none stroke-black" : "fill-none"} w-6 h-6`}
                             style={{ fill: active ? fillColor : "none", border: active ? "none" : "", stroke: active ? strokeColor : "currentColor" }}>
                            { iconPath }
                        </svg>
                    </i>
                </div>
            </div>
            <div className="ml-[4px] flex items-center">
                <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                    <span className="overflow-hidden tabular-nums relative">
                        { number }
                    </span>
                </span>
            </div>
        </div>
    )
}

export default MediaPageScaffoldHeaderReactionItem;