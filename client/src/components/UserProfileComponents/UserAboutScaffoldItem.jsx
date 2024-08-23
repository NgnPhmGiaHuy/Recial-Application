import Link from "next/link";
import Image from "next/image";

import { EllipsisHorizontalIcon, GlobeAltIcon, LockClosedIcon } from "@/components";

const UserAboutScaffoldItem = ({ userProps }) => {
    return (
        <div className="w-[calc(50%-4px)] mb-[8px] p-[16px] flex items-center rounded-lg shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)]">
            <div>
                <Link href={userProps?._id ? `/groups/${userProps?._id}` : `/${userProps?.user?._id}`}>
                    <div className="mr-[16px] rounded-lg border border-solid border-zinc-100 bg-white relative">
                        <div className="w-[80px] h-[80px] rounded-lg overflow-hidden relative">
                            <Image src={userProps?.user?.profile?.profile_picture_url || userProps?.group_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url || userProps?.group_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="pr-[16px] flex flex-col flex-grow relative">
                <div>
                    <Link href={userProps?._id ? `/groups/${userProps?._id}` : `/${userProps?.user?._id}`}>
                        <span className="text-[17px] text-black text-left font-semibold break-words relative leading-5 hover:underline">
                            <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                {userProps?.group_name ? userProps?.group_name : (userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname) }
                            </span>
                        </span>
                    </Link>
                </div>
                {userProps?.mutual_friends && userProps?.mutual_friends?.length ? (
                    <div className="mt-[4px]">
                        <span className="text-[13px] text-zinc-500 text-left font-normal break-words cursor-pointer relative leading-4 hover:underline">
                            <span className="overflow-hidden relative">
                                {userProps?.mutual_friends?.length} mutual friends
                            </span>
                        </span>
                    </div>
                ) : null}
                { userProps?.group_member && userProps?.group_member?.length ? (
                    <div className="mt-[4px] flex flex-row items-center text-zinc-500 relative gap-3">
                        <div className="flex flex-row items-center relative gap-1 after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500 after:mr-[-8px]">
                            <div className="w-[12px] h-[12px] flex items-center justify-center overflow-hidden relative">
                                { userProps?.group_privacy === "Public" ? (
                                    <GlobeAltIcon fill="none" stroke="currentColor" width={12} height={12} />
                                ) : (
                                    <LockClosedIcon fill="none" stroke="currentColor" width={12} height={12} />
                                ) }
                            </div>
                            <span className="text-[13px] text-left font-normal break-words relative leading-4">
                                { userProps?.group_privacy === "Public" ? "Public group" : "Private group" }
                            </span>
                        </div>
                        <Link href="">
                            <span className="text-[13px] text-left font-normal break-words relative leading-4 hover:underline">
                                <span className="overflow-hidden relative">
                                    { userProps?.group_member?.length } members
                                </span>
                            </span>
                        </Link>
                    </div>
                ) : null }
            </div>
            { userProps?.user?.profile?.username && (
                <div className="m-[-6px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-between relative">
                    <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                        <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer rounded-full overflow-hidden relative hover:bg-zinc-100">
                            <EllipsisHorizontalIcon stroke="currentColor" strokeWidth={2} />
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default UserAboutScaffoldItem;