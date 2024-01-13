const GroupPageHeaderContentButton = ({ buttonProps }) => {
    return (
        <div className="p-[4px] flex flex-col flex-shrink-0 relative">
            <div className="w-full flex flex-col justify-center cursor-pointer" onClick={buttonProps?.onClick}>
                <div className={`${buttonProps?.color ? "text-white bg-lime-500 hover:bg-lime-700" : "text-black bg-zinc-100 hover:bg-zinc-300"} h-[36px] px-[12px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-center rounded-md relative transition-all`}>
                    {buttonProps?.icon && (
                        <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                            <div className="w-[16px] h-[16px] relative">
                                <i>
                                    {buttonProps?.icon}
                                </i>
                            </div>
                        </div>
                    )}
                    {buttonProps?.title && (
                        <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                            <span className="block text-[15px] text-center font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {buttonProps?.title}
                                </span>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GroupPageHeaderContentButton;