const HeaderPersonalAccountSettingItem = ({settingItemData}) => {
    return (
        <div className="px-[8px]">
            <div className="min-h-[44px] px-[8px] flex flex-row items-center justify-between rounded-md cursor-pointer relative hover:bg-zinc-100 transition-all">
                <div className="my-[6px] mr-[12px] flex flex-col self-start relative">
                    <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-zinc-200 relative">
                        <i>
                            {settingItemData.settingItemIcon}
                        </i>
                    </div>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-between grow self-stretch relative">
                    <div className="py-[8px] flex flex-col flex-shrink grow items-stretch basis-0 relative">
                        <span className="block text-[14px] text-black text-left font-medium break-words leading-4">
                            {settingItemData.settingItemTitle}
                        </span>
                    </div>
                    {settingItemData.hasSettingItemChevronRight? (
                        <div className="m-[12px] mr-[0px] self-start relative">
                            <div className="w-[24px] h-[24px] flex flex-row items-center justify-center relative">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default HeaderPersonalAccountSettingItem;