import { useSelector } from "react-redux";

import { UserAboutScaffoldOptions } from "@/components";

const UserAboutScaffold = ({ titleLabel, options }) => {
    const { isCurrentUser } = useSelector(state => state.userRelationship);

    return (
        <div className="flex flex-col rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden relative">
            <div className="p-[16px]">
                <div className="mb-[8px] flex">
                    <div className="flex grow items-center relative">
                        <div className="flex flex-col relative">
                            <a href="">
                                <span className="text-[20px] text-black text-left font-bold break-words relative leading-6">
                                    <span className="overflow-hidden relative">
                                        {  titleLabel }
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="m-[-4px] flex flex-row flex-shrink-0 items-center justify-between relative">
                        { isCurrentUser && (options?.isFriendCard || options?.isFriendPage) ? (
                            <>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <a href="/friends/requests">
                                        <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                            <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    Friend requests
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <a href="/friends">
                                        <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                            <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    Find Friends
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </>
                        ) : null }
                        { isCurrentUser && (options?.isPhotoPage || options?.isVideoPage) ? (
                            <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                    <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Add photos/video
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ) : null }
                        <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="p-[8px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer bg-zinc-100 relative hover:bg-zinc-200 transition-all">
                                <div className="w-[16px] h-[16px] mx-[3px] flex items-center justify-center overflow-hidden relative">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </i>
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