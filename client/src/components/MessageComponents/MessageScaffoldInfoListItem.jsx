const MessageScaffoldInfoListItem = ({ button }) => {
    return (
        <div className="px-[8px] flex flex-col flex-shrink-0 animate-slideInTop relative">
            <div className="m-[-6px] p-[8px] flex flex-col items-stretch justify-center relative">
                <div className="flex flex-row flex-nowrap flex-shrink-0 items-center justify-between rounded-md hover:bg-zinc-100 overflow-hidden cursor-pointer relative transition-all">
                    <div className="w-[24px] h-[24px] flex items-center justify-center overflow-hidden relative">
                        { button.icon }
                    </div>
                    <div className="p-[6px] flex flex-row flex-wrap flex-shrink grow items-center justify-between basis-auto">
                        <div className="h-[24px] flex flex-col flex-shrink-0 relative">
                            <span className="block text-[14px] text-black text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    { button.title }
                                </span>
                            </span>
                            { button.subTitle && (
                                <span className="block text-[10px] text-zinc-500 text-left font-normal break-words relative leading-3">
                                    <span className="overflow-hidden relative">
                                        { button.subTitle }
                                    </span>
                                </span>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageScaffoldInfoListItem;