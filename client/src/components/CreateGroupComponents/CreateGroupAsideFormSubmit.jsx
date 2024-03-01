const CreateGroupAsideFormSubmit = ({ state }) => {
    return (
        <section>
            <div className="mx-[-6px] px-[16px] pt-[16px] flex flex-row flex-nowrap items-stretch justify-between relative">
                <div className="p-[6px] flex flex-col flex-shrink grow basis-0 relative">
                    <div className={`${state.inputData.inputValue ? "bg-lime-500 hover:bg-lime-700 text-white cursor-pointer" : "bg-zinc-200 cursor-not-allowed"} w-full h-[42px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-xl overflow-hidden relative`}>
                        <div className="w-full flex items-center justify-center relative">
                            <span className={`${state.inputData.inputValue ? "text-white" : "text-zinc-500"} block text-[15px] text-center font-semibold break-words relative leading-5`}>
                                <span className="overflow-hidden relative">
                                    Create
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateGroupAsideFormSubmit;