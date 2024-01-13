import Link from "next/link";
import Image from "next/image";

import { handleFormatNumber } from "@/utils";

const GroupPageContentBlockMember = ({ groupData }) => {
    return (
        <div className="mb-[16px]">
            <div className="w-full flex bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden relative">
                <div className="mb-[20px] flex flex-col grow relative">
                    <div className="mb-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="pt-[20px] pb-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                                <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Members
                                    </span>
                                    <span className="text-zinc-500">
                                        <span className="mx-[4px] overflow-hidden relative">
                                            ·
                                        </span>
                                        <span className="overflow-hidden relative">
                                             {handleFormatNumber(groupData?.groupMemberProps?.length)}
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="h-[1px] mx-[16px] mt-[12px] mb-[6px] bg-zinc-400"></div>
                        <div className="px-[16px] pt-[16px]">
                            <div className="flex flex-col relative">
                                <div className="my-[-10px] py-[10px] flex flex-row overflow-x-hidden relative">
                                    {groupData?.groupMemberProps?.filter((value) => value.role !== "Member").slice(0, 20).map((value, index) => (
                                        <div className={`${index !== 0 && "ml-[-8px]"} mb-[20px]  relative`} style={{zIndex: 20 - index}} key={index}>
                                            <Link href={`/${value.user._id}`}>
                                                <div className="w-[36px] h-[36px] flex flex-col items-center justify-center rounded-full border border-solid border-white overflow-hidden relative">
                                                    <Image src={value.user.profile_picture_url} alt={`${value.user.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-[12px]">
                                    <span className="block text-[15px] text-black text-left font-normal relative leading-5">
                                        <span className="overflow-hidden relative">
                                            {groupData?.groupMemberProps?.filter((value) => value.role === "Group_Administrator")[0].user.username} is an admin.&nbsp;
                                            {groupData?.groupMemberProps?.filter((value) => value.role === "Group_Moderator")[0].user.username} and&nbsp;
                                            {groupData?.groupMemberProps?.filter((value) => value.role === "Group_Moderator").length - 1} other members are moderators.
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContentBlockMember;