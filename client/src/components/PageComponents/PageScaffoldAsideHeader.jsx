const PageScaffoldAsideHeader = () => {
    return (
        <div className="px-[16px] py-[12px] flex flex-col relative rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden">
            <div className="flex items-center justify-center relative">
                <div className="w-full h-full flex flex-row items-center justify-between relative">
                    <div className="px-[6px]">
                        <span className="block text-[16px] text-black text-left font-medium break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                Info
                            </span>
                        </span>
                    </div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer overflow-hidden relative">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageScaffoldAsideHeader;