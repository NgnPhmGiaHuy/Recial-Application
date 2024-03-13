import Link from "next/link";
import Image from "next/image";

import { useSelector } from "react-redux";
import { handleFormatNumber } from "@/utils";
import { GroupPageHeaderContentButton } from "@/components";
import { GROUP_PAGE_HEADER_BUTTON_OPTIONS } from "@/constants/GroupConstants/GroupPageHeaderConstants";

const GroupPageHeaderContent = () => {
    const groupProps = useSelector(state => state.group);

    const button = GROUP_PAGE_HEADER_BUTTON_OPTIONS(groupProps).filter(Boolean)

    return (
        <>
            <div className="pb-[16px] flex flex-row flex-nowrap items-stretch justify-center bg-white relative">
                <div className="max-w-[1320px] px-[16px] flex flex-col flex-shrink grow relative">
                    <div className="w-full m-[-6px] pt-[16px] flex flex-row flex-wrap items-end justify-between relative">
                        <div className="min-w-[320px] px-[6px] pt-[6px] pb-[16px] flex flex-col flex-shrink grow-[999] basis-0 relative">
                            <div className="mt-[16px] flex flex-col grow relative">
                                <div className="my-[-8px] flex flex-col flex-shrink-0 relative">
                                    <div className="my-[8px]">
                                        <Link href={`/groups/${groupProps?.profile?._id}`}>
                                            <span
                                                className="block text-[28px] text-black text-left font-bold break-words relative leading-8 hover:underline transition-all">
                                                <span className="overflow-hidden line-clamp-2 text-ellipsis relative">
                                                    { groupProps?.profile?.group_name }
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="my-[8px]">
                                        <div className="m-[-2px] flex flex-row items-center justify-start relative">
                                            <div className="p-[2px] flex flex-col relative">
                                                <div className="m-[-2px] flex flex-row flex-shrink-0 flex-nowrap items-center relative">
                                                    <div className="p-[2px] flex flex-col flex-shrink-0 relative">
                                                        <div className="w-[16px] h-[16px] relative">
                                                            <i>
                                                                {groupProps?.profile?.group_privacy === "Public" ? (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                                                    </svg>
                                                                ) : (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                                                                    </svg>
                                                                )}
                                                            </i>
                                                        </div>
                                                    </div>
                                                    <div className="p-[2px] flex flex-col flex-shrink-0 relative">
                                                        <span className="block text-[15px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                                            <span className="overflow-hidden relative">
                                                                { groupProps?.profile?.group_privacy } group
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-[2px] flex flex-col relative">
                                                <span> · </span>
                                            </div>
                                            <div className="p-[2px] flex flex-col relative">
                                                <Link href="">
                                                    <span
                                                        className="block text-[15px] text-zinc-500 text-left font-semibold break-words relative leading-5 hover:underline transition-all">
                                                        <span className="overflow-hidden relative">
                                                            { handleFormatNumber(groupProps?.members?.length) } members
                                                        </span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { (groupProps?.currentUserRole || groupProps?.profile?.group_privacy === "Public") && (
                                    <div className="pt-[12px] flex flex-col flex-shrink-0 items-start relative">
                                        <div className="h-[36px] flex flex-row overflow-hidden relative">
                                            { groupProps?.members?.slice(0, 20).map((value, index) => (
                                                <div className={`${index !== 0 && "ml-[-4px]"} mb-[20px] relative`} style={{zIndex: 20 - index}} key={index}>
                                                    <Link href={`/${value.user._id}`}>
                                                        <div className="w-[32px] h-[32px] flex flex-col items-center justify-center rounded-full border border-solid border-white overflow-hidden relative">
                                                            <Image src={value.user.profile_picture_url} alt={`${value.user.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                             ))}
                                        </div>
                                    </div>
                                ) }
                            </div>
                        </div>
                        <div className="min-w-[320px] px-[6px] pt-[6px] pb-[16px] flex flex-col flex-shrink-0 grow justify-end basis-auto relative">
                            <div className="mx-[-16px] my-[-4px] flex flex-row flex-shrink-0 flex-nowrap items-center justify-end relative">
                                { button.map((value, index) => (
                                    <GroupPageHeaderContentButton key={index} buttonProps={value}/>
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-nowrap items-stretch justify-center bg-white relative">
                <div className="max-w-[1320px] after:h-[1px] px-[16px] flex flex-col flex-shrink grow after:bg-zinc-300 relative"></div>
            </div>
        </>

    );
};

export default GroupPageHeaderContent;