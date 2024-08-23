import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

import { EllipsisHorizontalIcon, UserAboutScaffoldOptions } from "@/components";

const UserAboutScaffold = ({ titleLabel, options }) => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    return (
        <div className="flex flex-col rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden relative">
            <div className="p-[16px]">
                <div className="mb-[8px] flex">
                    <div className="flex grow items-center relative">
                        <div className="flex flex-col relative">
                            <Link href="">
                                <span className="text-[20px] text-black text-left font-bold break-words relative leading-6">
                                    <span className="overflow-hidden relative">
                                        { titleLabel }
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="m-[-4px] flex flex-row flex-shrink-0 items-center justify-between relative">
                        { isCurrentUser && (options?.isFriendCard || options?.isFriendPage) ? (
                            <>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <Link href="/friends/requests">
                                        <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                            <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                                Friend requests
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <Link href="/friends">
                                        <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                            <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                                Find Friends
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        ) : null }
                        { isCurrentUser && (options?.isPhotoPage || options?.isVideoPage) ? (
                            <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                    <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                        Add photos/video
                                    </span>
                                </div>
                            </div>
                        ) : null }
                        <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="p-[8px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer bg-zinc-100 relative hover:bg-zinc-200 transition-all">
                                <div className="w-[16px] h-[16px] mx-[3px] flex items-center justify-center overflow-hidden relative">
                                    <EllipsisHorizontalIcon fill="none" stroke="currentColor" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UserAboutScaffoldOptions options={options}/>
            </div>
        </div>
    );
};

export default UserAboutScaffold;