import { MessageHeaderSwitchButton } from "@/components";

const QuickSettingItem = ({ settingProps }) => {
    if (settingProps.break) {
        return (
            <div className="mx-[16px] mt-[4px] h-[1px] bg-zinc-300"></div>
        )
    }

    return (
        <div onClick={settingProps.onClick}>
            <div className="mx-[8px] p-[8px] flex flex-row flex-shrink-0 items-center cursor-pointer rounded-xl hover:bg-zinc-100 transition-all relative">
                <div className="mr-[12px] flex items-center align-baseline justify-center">
                    { settingProps.icon }
                </div>
                <div className="flex flex-row grow items-center justify-between">
                    <div className="flex flex-col">
                        <span className="block text-[15px] text-black text-left font-medium break-words leading-5">
                            <span className="overflow-hidden line-clamp-1 relative">
                                { settingProps.title }
                            </span>
                        </span>
                        { settingProps.settingItemSubtitle && (
                            <span className="block text-[12px] text-zinc-500 text-left font-normal break-words leading-4">
                                <span className="overflow-hidden line-clamp-2 relative">
                                    { settingProps.settingItemSubtitle }
                                </span>
                            </span>
                        ) }
                    </div>
                    { settingProps.switchButton && <MessageHeaderSwitchButton/> }
                </div>
            </div>
        </div>
    )
}

export default QuickSettingItem;