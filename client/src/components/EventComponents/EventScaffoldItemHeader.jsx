const EventScaffoldItemHeader = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between relative">
            <div className="max-w-[640px] flex flex-shrink grow items-center relative">
                <span className="block text-[32px] text-black text-left font-extrabold break-words relative leading-9">
                    <span className="overflow-hidden line-clamp-2 relative">
                        Awesome Pool Party with Friends
                    </span>
                </span>
            </div>
            <div className="h-full py-[8px] flex items-start justify-between relative">
                <div className="w-[24px] h-[24px] flex flex-shrink-0 items-center justify-center cursor-pointer relative">
                    <i className="group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"/>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default EventScaffoldItemHeader;