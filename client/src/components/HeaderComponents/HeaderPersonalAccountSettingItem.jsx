import Link from "next/link";

import { ChevronRightIcon } from "@/components";

const HeaderPersonalAccountSettingItem = ({ settingProps }) => {
    return (
        <div className="px-[8px]">
            <Link href={settingProps.linkPath}>
                <div className="min-h-[44px] px-[8px] flex flex-row items-center justify-between rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                    <div className="my-[6px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[36px] h-[36px] flex items-center justify-center rounded-xl bg-zinc-200 relative">
                            { settingProps.icon }
                        </div>
                    </div>
                    <div className="flex flex-row flex-shrink items-center justify-between grow self-stretch relative">
                        <div className="py-[8px] flex flex-col flex-shrink grow items-stretch basis-0 relative">
                            <span className="block text-[14px] text-black text-left font-medium break-words leading-4">
                                { settingProps.title }
                            </span>
                        </div>
                        { settingProps.showChevron && (
                            <div className="m-[12px] mr-[0px] self-start relative">
                                <div className="w-[24px] h-[24px] flex flex-row items-center justify-center relative">
                                    <ChevronRightIcon fill="none" stroke="currentColor" width={20} height={20} />
                                </div>
                            </div>
                        ) }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HeaderPersonalAccountSettingItem;