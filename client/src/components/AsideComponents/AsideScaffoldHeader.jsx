const AsideScaffoldHeader = ({ aside }) => {
    return (
        <section>
            <div className="min-h-[48px] px-[4px] flex flex-row items-center justify-between relative">
                { aside.subtitle && (
                    <a href="/friends">
                        <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                            <div
                                className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-xl relative hover:bg-zinc-200 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </a>
                ) }
                <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                    <div
                        className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                        <div className="my-[-5px] flex flex-col">
                            { aside.subtitle && (
                                <a href="">
                                    <span className="block text-[13px] text-black text-left font-normal break-words leading-4">
                                        <span className="overflow-hidden relative">
                                            { aside.subtitle }
                                        </span>
                                    </span>
                                </a>
                            ) }
                            <div className="my-[5px]">
                                <span className="block text-[24px] text-black text-left font-bold break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        { aside.title }
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                { !aside.subtitle && (
                    <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                        <div
                            className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full cursor-pointer bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                ) }
            </div>
        </section>
    );
};

export default AsideScaffoldHeader;