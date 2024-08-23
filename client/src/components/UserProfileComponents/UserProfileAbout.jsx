"use client"

import Link from "next/link";

import { useOverflowText } from "@/hooks";
import { ArrowRightIcon } from "@/components";
import { shallowEqual, useSelector } from "react-redux";

const UserProfileAbout = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);
    const { textRef, showMoreText, isOverflowing, handleShowMoreText } = useOverflowText();

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    return (
        <section className="mb-[16px] bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="py-[24px] flex flex-col gap-6 relative">
                <header>
                    <div className="px-[24px] flex flex-col">
                        <span className="text-[24px] text-black text-left font-semibold break-words relative leading-6">
                            About
                        </span>
                    </div>
                </header>
                <div>
                    <div className="px-[24px] pb-[16px] overflow-hidden relative">
                        <div className="block relative">
                            <div>
                                <span ref={textRef} className={`${showMoreText ? "" : "line-clamp-3"} webkit-box text-[16px] text-black text-left font-normal break-words relative leading-6`}>
                                    {userProps?.user?.contact?.description}
                                </span>
                            </div>
                            {!showMoreText && isOverflowing ? (
                                <span className="text-[16px] text-zinc-500 font-semibold break-words cursor-pointer relative leading-5 hover:underline transition-all" onClick={handleShowMoreText}>
                                        See more
                                </span>
                            ) : showMoreText && isOverflowing ? (
                                <span className="text-[16px] text-zinc-500 font-semibold break-words cursor-pointer relative leading-5 hover:underline transition-all" onClick={handleShowMoreText}>
                                        See less
                                </span>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex border-t border-solid border-zinc-200">
                <Link href={`/${userProps?.user?._id}/about`} className="w-full h-full">
                    <div className="py-[16px] flex flex-row items-center justify-center gap-2 relative text-zinc-500 hover:text-black transition-all">
                        <span className="text-[16px] text-center font-semibold break-words relative leading-5">
                            Show all details
                        </span>
                        <ArrowRightIcon fill="none" stroke="currentColor" width={20} height={20} />
                    </div>
                </Link>
            </footer>
        </section>
    );
};

export default UserProfileAbout;