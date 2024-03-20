const MessageScaffoldInfoListMenu = ({ title, showListItem, handleShowListItem }) => {
    return (
        <div className="px-[8px] flex flex-col flex-shrink-0 relative">
            <div className="m-[-6px] p-[8px] flex flex-col items-stretch justify-center relative">
                <div className="flex flex-row flex-nowrap flex-shrink-0 items-center justify-between rounded-md hover:bg-zinc-100 overflow-hidden cursor-pointer relative transition-all">
                    <div className="p-[6px] flex flex-row flex-wrap flex-shrink grow items-center justify-between basis-auto" onClick={handleShowListItem}>
                        <div className="h-[24px] flex flex-col flex-shrink-0 relative">
                            <span className="block text-[14px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    { title }
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="w-[28px] h-[28px] flex items-center justify-center overflow-hidden relative">
                        <i>
                            { showListItem ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-4 h-4">
                                    <path fillRule="evenodd"
                                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-4 h-4">
                                    <path fillRule="evenodd"
                                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                            ) }
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MessageScaffoldInfoListMenu;