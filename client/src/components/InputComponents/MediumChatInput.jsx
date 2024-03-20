const MediumChatInput = ({ id, name, type, placeholder }) => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex items-center">
                <label htmlFor={id} className="w-full h-full">
                    <label className="w-full h-full min-w-[40px] flex items-center relative rounded-xl bg-zinc-100">
                        <input type={type ? type : "text"} name={name} id={id} placeholder={placeholder}
                               className="pl-[8px] pr-[48px] pt-[7px] pb-[9px] w-full h-full outline-none bg-zinc-100 rounded-full"/>
                        <div className="h-full top-0 right-[12px] flex items-center absolute">
                            <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full overflow-hidden cursor-pointer text-lime-500 hover:bg-zinc-100 relative transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </label>
                </label>
            </div>
        </div>
    );
};

export default MediumChatInput;