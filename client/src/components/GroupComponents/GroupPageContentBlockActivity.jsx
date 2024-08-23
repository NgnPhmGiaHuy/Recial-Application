import { shallowEqual, useSelector } from "react-redux";

import { formatLongDate } from "@/utils";
import { ChatBubbleLeftEllipsisIcon, UserGroupIcon, UsersIcon } from "@/components";

const GroupPageContentBlockActivity = () => {
    const groupProps = useSelector(state => state.group, shallowEqual);

    return (
        <div className="mb-[16px]">
            <div className="w-full flex bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden relative">
                <div className="mb-[20px] flex flex-col grow relative">
                    <div className="mb-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="pt-[20px] pb-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                                <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                    Activity
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="h-[1px] mx-[16px] mt-[12px] mb-[6px] bg-zinc-400"></div>
                        <div className="mt-[8px] flex flex-col relative">
                            <div className="pt-[8px] flex flex-col relative">
                                <div className="m-[-6px] px-[16px] flex flex-row flex-shrink-0 flex-nowrap items-start justify-start relative">
                                    <div className="p-[6px] flex flex-col relative">
                                        <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                                            <ChatBubbleLeftEllipsisIcon fill="none" stroke="currentColor" width={20} height={20} />
                                        </div>
                                    </div>
                                    <div
                                        className="p-[6px] flex flex-col flex-shrink grow self-center basis-0 relative">
                                        <div className="flex flex-col relative">
                                            <div>
                                                <span className="block text-[15px] text-zinc-900 text-left font-normal relative leading-5">
                                                    { groupProps?.activity?.group_post_today } new posts today
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block text-[13px] text-zinc-500 text-left font-normal relative leading-5">
                                                    { groupProps?.activity?.group_post_last_month } in the last month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[8px] flex flex-col relative">
                                <div
                                    className="m-[-6px] px-[16px] flex flex-row flex-shrink-0 flex-nowrap items-start justify-start relative">
                                    <div className="p-[6px] flex flex-col relative">
                                        <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                                            <UsersIcon fill="none" stroke="currentColor" width={20} height={20} />
                                        </div>
                                    </div>
                                    <div
                                        className="p-[6px] flex flex-col flex-shrink grow self-center basis-0 relative">
                                        <div className="flex flex-col relative">
                                            <div>
                                                <span className="block text-[15px] text-zinc-900 text-left font-normal relative leading-5">
                                                    { groupProps?.members?.length } total members
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block text-[13px] text-zinc-500 text-left font-normal relative leading-5">
                                                    + { groupProps?.activity?.group_member_add_last_week } in the last week
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[8px] flex flex-col relative">
                                <div className="m-[-6px] px-[16px] flex flex-row flex-shrink-0 flex-nowrap items-start justify-start relative">
                                    <div className="p-[6px] flex flex-col relative">
                                        <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                                            <UserGroupIcon fill="none" stroke="currentColor" width={20} height={20} />
                                        </div>
                                    </div>
                                    <div className="p-[6px] flex flex-col flex-shrink grow self-center basis-0 relative">
                                        <div className="flex flex-col relative">
                                            <div>
                                                <span className="block text-[15px] text-zinc-900 text-left font-normal relative leading-5">
                                                    Created on { formatLongDate(groupProps?.profile?.created_at) }.
                                                </span>
                                            </div>
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

export default GroupPageContentBlockActivity;