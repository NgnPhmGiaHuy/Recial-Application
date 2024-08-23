import { shallowEqual, useSelector } from "react-redux";

import { EllipsisHorizontalIcon, GroupPageNavigationButton, MagnifyingGlassIcon } from "@/components";
import { GROUP_PAGE_NAVIGATION_BUTTON_OPTIONS } from "@/constants/GroupConstants/GroupPageNavigationConstants";

const GroupPageNavigation = () => {
    const groupProps = useSelector(state => state.group, shallowEqual);

    const button = GROUP_PAGE_NAVIGATION_BUTTON_OPTIONS(groupProps).filter(Boolean);

    return (
        <div className="top-[56px] sticky z-[9999]">
            <div className="flex flex-row flex-nowrap items-stretch justify-center bg-white shadow-[0_1px_2px_rbga(0,0,0,0.1)] relative">
                <div className="max-w-[1320px] px-[16px] flex flex-col flex-shrink grow relative">
                    <div className="mx-[-4px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-between relative">
                        <div className="px-[4px] flex flex-col flex-shrink grow basis-0 relative">
                            <div className="overflow-hidden relative">
                                <div className="min-h-[60px] flex flex-row flex-nowrap items-stretch justify-between relative">
                                    <div className="flex flex-col flex-shrink grow basis-0 relative">
                                        <div className="w-full h-[60px] overflow-hidden relative">
                                            <div className="flex flex-row items-center relative">
                                                {button.map((value, index) => (
                                                    <GroupPageNavigationButton key={index} buttonProps={value}/>
                                                ))}
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="px-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="m-[-4px] flex flex-row flex-nowrap flex-shrink-0 items-stretch justify-between relative">
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <div className="h-[36px] px-[16px] flex flex-row flex-nowrap flex-shrink-0 items-center rounded-xl cursor-pointer bg-zinc-200 hover:bg-zinc-300 transition-all">
                                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                                            <MagnifyingGlassIcon fill="none" stroke="currentColor" width={16} height={16} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <div className="h-[36px] px-[16px] flex flex-row flex-nowrap flex-shrink-0 items-center rounded-xl cursor-pointer bg-zinc-200 hover:bg-zinc-300 transition-all">
                                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                                            <EllipsisHorizontalIcon fill="none" stroke="currentColor" width={16} height={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageNavigation;