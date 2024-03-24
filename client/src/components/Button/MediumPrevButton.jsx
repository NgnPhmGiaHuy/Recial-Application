const MediumPrevButton = ({ onClick }) => {
    return (
        <div className="top-[calc(50%-30px)] left-1 absolute">
            <div className="w-[60px] h-[60px] animate-bounceFadeIn relative">
                <div onClick={onClick} className="w-full h-full flex items-center justify-center cursor-pointer rounded-full overflow-hidden text-black bg-white outline outline-zinc-300 relative hover:bg-white transition-all">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                             stroke="currentColor" dataSlot="icon" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default MediumPrevButton;