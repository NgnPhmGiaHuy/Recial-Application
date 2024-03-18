const AsideShowMoreOrShowLessButton = ({ showMore, onClick }) => {
    return(
        <div className="px-[8px]">
            <div className="block rounded-md hover:bg-zinc-200 cursor-pointer transition-all" onClick={onClick}>
                <div className="min-h-[44px] px-[8px] flex flex-row items-center justify-between relative">
                    <div className="my-[4px] mr-[6px] flex flex-col self-center relative">
                        <div className="w-[36px] h-[36px] flex flex-row items-center justify-center rounded-full bg-gray-300 relative">
                            { showMore ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeWidth={3}/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeWidth={3}/>
                                </svg>
                            ) }
                        </div>
                    </div>
                    <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                        <div className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                            <div className="my-[-5px] flex flex-col">
                                <div className="my-[5px]">
                                    <span className="block text-[14px] text-black text-left font-medium break-words leading-4">
                                        <span className="overflow-hidden line-clamp-2 relative">
                                            { showMore ? "Show more" : "Show less" }
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideShowMoreOrShowLessButton;