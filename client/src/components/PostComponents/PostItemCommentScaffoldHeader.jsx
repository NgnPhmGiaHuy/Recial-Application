import Link from "next/link";

import { formatShortTimeAgo } from "@/utils";
import { EllipsisHorizontalIcon, ImageIcon } from "@/components";

const PostItemCommentScaffoldHeader = ({ postProps }) => {
    return (
        <div>
            <div className="flex flex-nowrap items-center relative">
                <Link href={postProps?.user?._id}>
                    <div className="mt-[0px] flex-shrink-0 self-start">
                        <ImageIcon src={postProps?.user?.profile?.profile_picture_url} />
                    </div>
                </Link>
                <div
                    className="min-h-[40px] ml-[4px] py-[8px] pl-[12px] pr-[64px] flex grow basis-0 bg-zinc-200 rounded-tr-xl overflow-hidden">
                    <Link href={postProps?.user?._id}>
                        <div className="min-h-[22px] flex flex-col items-start justify-center">
                            <span className="text-[16px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                                    { postProps?.user?.profile?.username || postProps?.user?.profile?.firstname + " " + postProps?.user?.profile?.lastname }
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
                <div
                    className="min-w-[48px] top-[8px] right-[24px] flex items-center justify-center float-right absolute">
                    <div className="mr-[4px]">
                        <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                { formatShortTimeAgo(postProps?.updated_at) }
                            </span>
                        </span>
                    </div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center text-zinc-500 cursor-pointer relative">
                        <EllipsisHorizontalIcon fill="none" stroke="currentColor"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItemCommentScaffoldHeader;