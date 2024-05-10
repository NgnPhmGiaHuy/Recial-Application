const SmallMoreButton = ({ buttonRef, state, onClick }) => {
    return (
        <>
            <div className={`${state ? "w-[32px] h-[32px]" : "w-[0px] h-[0px] hidden overflow-hidden"} relative`}>
                <div className="rounded-full">
                    <div ref={buttonRef} className="w-[32px] h-[32px] flex justify-center items-center text-gray-500 cursor-pointer rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] border border-solid border-gray-200 relative hover:bg-zinc-100 transition-all"
                         onClick={onClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmallMoreButton;