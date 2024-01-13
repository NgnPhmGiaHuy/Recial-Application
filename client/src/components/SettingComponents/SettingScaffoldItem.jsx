const SettingScaffoldItem = ({ settingProps, isBorderBottom }) => {
    return (
        <li className={`${isBorderBottom && "after:w-full after:border-b after:border-solid after:border-zinc-200 after:absolute"}`}>
            <a href={settingProps.link}>
                <section className="px-[24px] py-[16px] flex bg-white">
                    <div className="flex flex-1">
                        <div className="flex-[1_1_auto]">
                            <span className="text-[16px] text-black text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {settingProps.title}
                                </span>
                            </span>
                        </div>
                        {settingProps.itemProps ? (
                            <div className="pl-[16px] flex-[1_1_auto]">
                                <span className="block text-[16px] text-zinc-500 self-center text-right text-ellipsis whitespace-nowrap overflow-hidden">
                                    {settingProps.itemProps}
                                </span>
                            </div>
                        ) : null}
                    </div>
                    <div className="h-[18px] pl-[16px] flex flex-[0_0_16px] items-center justify-end self-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </i>
                    </div>
                </section>
            </a>
        </li>
    );
};

export default SettingScaffoldItem;