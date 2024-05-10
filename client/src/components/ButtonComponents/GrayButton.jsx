const GrayButton = ({ title, onClick }) => {
    return (
        <div>
            <div className="p-[4px] flex flex-col flex-shrink grow basis-auto relative">
                <div className="flex flex-col justify-center cursor-pointer" onClick={onClick}>
                    <div className="h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-xl bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                        <div className="mx-[3px] flex flex-shrink-0 items-center justify-center relative">
                            <span className="block text-[15px] text-black text-center font-semibold break-words relative leading-5">
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                    {title}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrayButton;