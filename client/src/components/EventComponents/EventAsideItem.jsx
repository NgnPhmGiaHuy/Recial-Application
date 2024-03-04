const EventAsideItem = () => {
    return (
        <div>
            <a href="">
                <div className="mb-[12px] p-[20px] flex flex-row items-center justify-between border border-solid border-zinc-500 bg-zinc-100 rounded-xl overflow-hidden relative">
                    <div className="flex flex-row items-center justify-center gap-1 relative">
                        <div className="w-[20px] h-[20px] flex items-center justify-center text-lime-700 relative">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                                </svg>
                            </i>
                        </div>
                        <div>
                            <span className="block text-[16px] text-black text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden line-clamp-1 relative">
                                    May 5th
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row flex-shrink-0 items-center justify-center">
                        <span className="block text-[12px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                at 08:00 pm
                            </span>
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default EventAsideItem;