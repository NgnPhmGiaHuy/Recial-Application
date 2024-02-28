const UserProfileEditInputItem = ({ formData, handleFormChange, title, inputName, required, textarea }) => {
    return (
        <div className="px-[16px] py-[12px] flex flex-col items-stretch relative">
            <label htmlFor={inputName} className="flex flex-row border border-solid border-zinc-300 rounded-xl">
                <div className="flex flex-shrink grow relative">
                    <div className="w-full h-full flex flex-row items-stretch justify-between absolute">
                        <div className="px-[8px] pt-[8px]">
                            <span className="block text-[13px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {title}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="mt-[16px] px-[8px] pt-[12px] pb-[8px] flex flex-row flex-shrink grow items-stretch overflow-hidden">
                        <div className="w-full flex items-center z-20">
                            {textarea ? (
                                <textarea type="text" name={inputName} value={formData} onChange={handleFormChange} autoCapitalize="sentences" spellCheck={false} dir="auto" className="w-full min-h-[70px] no-scrollbar resize-none appearance-none outline-none"/>
                            ) : (
                                <input type="text" name={inputName} value={formData} onChange={handleFormChange} required={required} spellCheck={false} className="w-full text-[17px] text-black text-left font-normal outline-none relative leading-5"/>
                            )}
                        </div>
                    </div>
                </div>
            </label>
            {!formData && required &&  (
                <div className="mt-[4px]">
                    <div className="w-full flex flex-row items-center text-red-500 relative">
                        <div className="w-[16px] h-[16px] mr-[4px]">
                            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-row items-center relative">
                            <span className="text-[14px] text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {title.slice(0, -1)} is a required field
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfileEditInputItem;