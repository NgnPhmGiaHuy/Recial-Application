import Link from "next/link";

import { formatFullTimeAgo } from "@/utils";
import { GlobeAltIcon, LockClosedIcon, UserIcon, UsersIcon } from "@/components";

const PostItemHeaderDetail = ({ props }) => {
    return (
        <>
            <div>
                <span className="block text-[16px] text-black text-left font-normal break-words leading-5 relative hover:underline">
                    {props.postProps?.post?.group ? (
                        <Link href={`/groups/${props.postProps?.post?.group?._id}`} className="w-full h-full">
                            <strong>
                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                    {props.postProps?.post?.group?.group_name}
                                </span>
                            </strong>
                        </Link>
                    ) : props.postProps?.page ? (
                        <Link href={`/pages/${props.postProps?.page?._id}`} className="w-full h-full">
                            <strong>
                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                    {props.postProps?.page?.page_name}
                                </span>
                            </strong>
                        </Link>
                    ) : (
                        <Link href={props.postProps?.post?.user?._id} className="w-full h-full">
                            <strong>
                                <span className="overflow-hidden text-ellipsis line-clamp-2 relative">
                                    {props.postProps?.post?.user?.profile?.username || props.postProps?.post?.user?.profile?.firstname + " " + props.postProps?.post?.user?.profile?.lastname}
                                </span>
                            </strong>
                        </Link>
                    )}
                </span>
            </div>
            <div>
                <span className="block text-[13px] text-zinc-500 text-left font-normal break-words leading-4">
                    <div className="min-h-[16px] flex flex-row items-center pt-[6px]">
                        {props.postProps?.post?.group && (
                            <>
                                <span className="flex items-center break-words pr-[2px]">
                                    <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                            {props.postProps?.post?.user?.profile?.username || props.postProps?.post?.user?.profile?.firstname + " " + props.postProps?.post?.user?.profile?.lastname}
                                        </span>
                                    </span>
                                </span>
                                <span className="flex items-center break-words">
                                    <span className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                            <span> · </span>
                                        </span>
                                    </span>
                                </span>
                            </>
                        )}
                        <span className="flex items-center break-words pr-[2px]">
                            <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                    {formatFullTimeAgo(props.postProps?.post?.updated_at)}
                                </span>
                            </span>
                        </span>
                        <span className="flex items-center break-words">
                            <span className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                    <span> · </span>
                                </span>
                            </span>
                        </span>
                        <span className="flex items-center break-words pl-[2px]">
                            <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis line-clamp-1 relative">
                                    {props.postProps?.post?.post_privacy === "Public" ? (
                                        <GlobeAltIcon fill="none" stroke="currentColor" width={18} height={18}/>
                                    ) : props.postProps?.post?.post_privacy === "Private" ? (
                                        <LockClosedIcon fill="none" stroke="currentColor" width={18} height={18}/>
                                    ) : props.postProps?.post?.post_privacy === "Friends" ? (
                                        <UsersIcon fill="none" stroke="currentColor" width={18} height={18}/>
                                    ) : props.postProps?.post?.post_privacy === "Specific_Friends" ? (
                                        <UserIcon fill="none" stroke="currentColor" width={18} height={18}/>
                                    ) : null}
                                </span>
                            </span>
                        </span>
                    </div>
                </span>
            </div>
        </>
    );
};

export default PostItemHeaderDetail;