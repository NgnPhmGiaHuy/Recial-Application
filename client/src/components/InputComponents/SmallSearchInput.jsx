const SmallSearchInput = ({ id, name, type, placeholder }) => {
    return (
        <section>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full my-[8px]">
                    <div className="w-full h-full flex items-center">
                        <label htmlFor={id} className="w-full h-full">
                            <label className="w-full h-full min-w-[40px] min-h-[40px] flex items-center relative rounded-xl bg-zinc-100 z-10">
                                <span className="flex items-center pl-[12px] transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                    </svg>
                                </span>
                                <input type={ type ? type : "text" } name={name} id={id} placeholder={placeholder} className="px-[8px] pt-[7px] pb-[9px] w-full h-full outline-none bg-zinc-100 rounded-r-full"/>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmallSearchInput;