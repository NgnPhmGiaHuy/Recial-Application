const AsideMessageHeader = () => {
    return (
        <section>
            <div className="min-h-[48px] px-[4px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                    <div className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                        <div className="my-[-5px] flex flex-col">
                            <div className="my-[5px]">
                                <span className="block text-[32px] text-black text-left font-bold break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        Chats
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-2 relative">
                        <div className="my-[6px] flex flex-col self-center relative">
                            <div
                                className="w-[36px] h-[36px] flex flex-row items-center justify-center rounded-xl cursor-pointer bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                        <div className="my-[6px] flex flex-col self-center relative">
                            <div className="w-[36px] h-[36px] flex flex-row items-center justify-center rounded-xl cursor-pointer bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AsideMessageHeader;