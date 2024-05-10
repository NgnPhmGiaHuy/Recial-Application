const MessageScaffoldItemDeleteButton = ({ title, onClick, isColor }) => {
    return (
        <div>
            <div className="flex flex-col flex-shrink-0 basis-0 relative">
                <div className="w-full flex flex-col justify-center relative">
                    <div className={`${isColor ? "px-[40px] bg-lime-500 hover:bg-lime-700" : "px-[12px] hover:bg-zinc-100"} h-[36px] flex flex-row flex-shrink-0 items-center justify-center rounded-md cursor-pointer relative transition-all`}
                         onClick={onClick}>
                        <span className={`${isColor ? "text-white" : " text-lime-500" } block text-[15px] text-center font-semibold break-words relative leading-5`}>
                            <span className="overflow-hidden relative">
                                {title}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageScaffoldItemDeleteButton;