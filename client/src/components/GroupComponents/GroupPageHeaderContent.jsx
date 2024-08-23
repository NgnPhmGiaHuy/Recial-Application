import Link from "next/link";
import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

import { handleFormatNumber } from "@/utils";
import {GlobeAltIcon, GroupPageHeaderContentButton, ImageIcon, LockClosedIcon} from "@/components";
import { GROUP_PAGE_HEADER_BUTTON_OPTIONS } from "@/constants/GroupConstants/GroupPageHeaderConstants";

const GroupPageHeaderContent = () => {
    const groupProps = useSelector(state => state.group, shallowEqual);

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
                                            <span className="block text-[28px] text-black text-left font-bold break-words relative leading-8 hover:underline transition-all">
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
                                                            { groupProps?.profile?.group_privacy === "Public" ? (
                                                                <GlobeAltIcon fill="none" stroke="currentColor" width={16} height={16} />
                                                            ) : (
                                                                <LockClosedIcon fill="none" stroke="currentColor" width={16} height={16} />
                                                            ) }
                                                        </div>
                                                    </div>
                                                    <div className="p-[2px] flex flex-col flex-shrink-0 relative">
                                                        <span className="block text-[15px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                                            { groupProps?.profile?.group_privacy } group
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-[2px] flex flex-col relative">
                                                <span> · </span>
                                            </div>
                                            <div className="p-[2px] flex flex-col relative">
                                                <Link href="">
                                                    <span className="block text-[15px] text-zinc-500 text-left font-semibold break-words relative leading-5 hover:underline transition-all">
                                                        { handleFormatNumber(groupProps?.members?.length) } members
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
                                                        <ImageIcon src={value.user?.profile?.profile_picture_url} width={32} height={32} />
                                                        <div className="w-[32px] h-[32px] flex flex-col items-center justify-center rounded-full border border-solid border-white overflow-hidden relative">
                                                            <Image src={value.user?.profile?.profile_picture_url} alt={`${value.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
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