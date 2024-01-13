import { convertDateFormat } from "@/utils";

const GroupPageContentBlockActivity = ({ groupData }) => {
    return (
        <div className="mb-[16px]">
            <div className="w-full flex bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden relative">
                <div className="mb-[20px] flex flex-col grow relative">
                    <div className="mb-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="pt-[20px] pb-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                                <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Activity
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="h-[1px] mx-[16px] mt-[12px] mb-[6px] bg-zinc-400"></div>
                        <div className="mt-[8px] flex flex-col relative">
                            <div className="pt-[8px] flex flex-col relative">
                                <div
                                    className="m-[-6px] px-[16px] flex flex-row flex-shrink-0 flex-nowrap items-start justify-start relative">
                                    <div className="p-[6px] flex flex-col relative">
                                        <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div
                                        className="p-[6px] flex flex-col flex-shrink grow self-center basis-0 relative">
                                        <div className="flex flex-col relative">
                                            <div>
                                                <span
                                                    className="block text-[15px] text-zinc-900 text-left font-normal relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {groupData?.groupActivityProps?.groupPostToday} new posts today
                                                    </span>
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    className="block text-[13px] text-zinc-500 text-left font-normal relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {groupData?.groupActivityProps?.groupPostLastMonth} in the last month
                                                    </span>
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
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div
                                        className="p-[6px] flex flex-col flex-shrink grow self-center basis-0 relative">
                                        <div className="flex flex-col relative">
                                            <div>
                                                <span
                                                    className="block text-[15px] text-zinc-900 text-left font-normal relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {groupData?.groupMemberProps?.length} total members
                                                    </span>
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    className="block text-[13px] text-zinc-500 text-left font-normal relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        + {groupData?.groupActivityProps?.groupMemberAddLastWeek} in the last week
                                                    </span>
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
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div
                                        className="p-[6px] flex flex-col flex-shrink grow self-center basis-0 relative">
                                        <div className="flex flex-col relative">
                                            <div>
                                                <span
                                                    className="block text-[15px] text-zinc-900 text-left font-normal relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        Created on {convertDateFormat(groupData?.groupProps?.created_at)}.
                                                    </span>
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