const PostItemFooterButton = ({ icon = null, labelText = null, forwardRef = null, handleClick = null, handleMouseEnter = null, handleMouseLeave = null }) => {
    return (
        <>
            <div ref={forwardRef} className="px-[2px] py-[6px] flex flex-col flex-shrink grow relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flex flex-row basis-auto relative">
                    <div className="sm:h-[36px] h-[30px] mx-[-4px] my-[2px] sm:px-[12px] px-[6px] flex flex-row flex-shrink flex-nowrap basis-0 grow items-center justify-center whitespace-nowrap rounded-md cursor-pointer relative hover:bg-zinc-200"
                         onClick={handleClick}>
                        <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                            {icon}
                        </div>
                        <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                            <span className="block text-[15px] text-left text-zinc-500 font-semibold break-words relative leading-5">
                                <span>{labelText}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostItemFooterButton;