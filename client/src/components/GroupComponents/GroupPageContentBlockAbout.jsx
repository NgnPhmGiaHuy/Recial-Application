import { convertDateFormat } from "@/utils";

const GroupPageContentBlockAbout = ({ groupData }) => {
    return (
        <div className="mb-[16px]">
            <div className="w-full flex bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden relative">
                <div className="mb-[20px] flex flex-col grow relative">
                    <div className="mb-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="pt-[20px] pb-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                                <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        About this group
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="h-[1px] mx-[16px] mt-[12px] mb-[6px] bg-zinc-400"></div>
                        <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                            <div
                                className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                                <div className="flex flex-col relative">
                                    <span
                                        className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            {groupData?.groupProps?.group_description}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                            <div className="flex flex-row items-center relative">
                                <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                                    <div
                                        className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div
                                    className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                                    <div className="my-[-5px] flex flex-col relative">
                                        <div>
                                            <span
                                                className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    {groupData?.groupProps?.group_privacy}
                                                </span>
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    Only members can see who's in the group and what they post.
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                            <div className="flex flex-row items-center relative">
                                <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                                    <div
                                        className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div
                                    className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                                    <div className="my-[-5px] flex flex-col relative">
                                        <div>
                                            <span
                                                className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    History
                                                </span>
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    Group created on {convertDateFormat(groupData?.groupProps?.created_at)}. Name last changed on {convertDateFormat(groupData?.groupProps?.updated_at)}.
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
    );
};

export default GroupPageContentBlockAbout;