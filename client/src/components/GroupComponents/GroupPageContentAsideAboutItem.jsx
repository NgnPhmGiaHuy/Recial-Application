import { shallowEqual, useSelector } from "react-redux";

import { EyeIcon, EyeSlashIcon, GlobeAltIcon, LockClosedIcon } from "@/components";

const GroupPageContentAsideAboutItem = () => {
    const groupProps = useSelector(state => state.group, shallowEqual);

    return (
        <>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                    <div className="flex flex-col relative">
                        <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                { groupProps?.profile?.group_description }
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row items-center relative">
                    <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            { groupProps?.profile?.group_privacy === "Public" ? (
                                <GlobeAltIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) : (
                                <LockClosedIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) }
                        </div>
                    </div>
                    <div
                        className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col relative">
                            <div>
                                <span
                                    className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        { groupProps?.profile?.group_privacy }
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        { groupProps?.profile?.group_privacy === "Public" ? "Anyone can see who's in the group and what they post." : "Only members can see who's in the group and what they post." }
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
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            { groupProps?.profile?.group_visible ? (
                                <EyeIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) : (
                                <EyeSlashIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) }
                        </div>
                    </div>
                    <div
                        className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col relative">
                            <div>
                                <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                    Visible
                                </span>
                            </div>
                            <div>
                                <span
                                    className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        { groupProps?.profile?.group_visible ? "Anyone can find this group." : "This group is not discoverable by everyone." }
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupPageContentAsideAboutItem;