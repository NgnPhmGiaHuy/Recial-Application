const ClimateSciencePageCardHeader = ({ title, subtitle, onClick }) => {
    return (
        <div>
            <div className="my-[4px] flex flex-col relative">
                <div className="px-[16px] pt-[4px] pb-[16px] flex flex-col flex-shrink-0 relative">
                    <div className="flex flex-row flex-nowrap items-center justify-between relative">
                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                            <span className="block text-[16px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {title}
                                </span>
                            </span>
                        </div>
                        <div className="ml-[8px] flex flex-col flex-shrink-0 items-start justify-center relative">
                            <div className="w-[32px] h-[32px] flex items-center justify-center relative cursor-pointer rounded-full hover:bg-zinc-100 transition-all" onClick={onClick}>
                                <div className="w-[20px] h-[20px] flex items-center justify-center overflow-hidden relative">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5">
                                            <g fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 14h1v9h1m12-7a13 13 0 1 1-26 0a13 13 0 0 1 26 0Z"></path>
                                                <path fill="currentColor" d="M17 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></path>
                                            </g>
                                        </svg>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    { subtitle && (
                        <div className="flex flex-row flex-nowrap items-center justify-between relative">
                            <div className="flex flex-col flex-shrink grow basis-0 relative">
                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {subtitle}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageCardHeader;