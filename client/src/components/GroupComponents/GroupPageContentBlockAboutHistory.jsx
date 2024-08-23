import { shallowEqual, useSelector } from "react-redux";

import { ClockIcon } from "@/components";
import { formatLongDate } from "@/utils";

const GroupPageContentBlockAboutHistory = () => {
    const groupProps = useSelector(state => state.group, shallowEqual);

    return (
        <div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row items-center relative">
                    <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            <ClockIcon fill="none" stroke="currentColor" width={16} height={16} />
                        </div>
                    </div>
                    <div
                        className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col relative">
                            <div>
                                <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                    History
                                </span>
                            </div>
                            <div>
                                <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Group created on {formatLongDate(groupProps?.profile?.created_at)}. Name last changed on {formatLongDate(groupProps?.profile?.updated_at)}.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContentBlockAboutHistory;