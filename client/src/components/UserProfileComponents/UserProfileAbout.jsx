"use client"

import {useCallback, useState} from 'react';

const UserProfileAbout = ({userProps}) => {
    const [showMoreAboutMe, setShowMoreAboutMe] = useState(false);

    const handleShowMoreAboutMe = useCallback(() => {
        setShowMoreAboutMe((prevShowMoreAboutMe) => !prevShowMoreAboutMe);
    }, []);

    return (
        <section className="mb-[16px] bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="py-[24px] flex flex-col gap-6 relative">
                <header>
                    <div className="px-[24px] flex flex-col">
                        <span className="text-[24px] text-black text-left font-semibold break-words relative leading-6">
                            <span className="overflow-hidden relative">
                                About
                            </span>
                        </span>
                    </div>
                </header>
                <div>
                    <div className="px-[24px] pb-[16px]">
                        <div>
                            <span className="text-[16px] text-black font-normal break-words relative leading-5">
                                <span className={`${showMoreAboutMe ? "" : "line-clamp-3"} overflow-hidden text-ellipsis relative`}>
                                    {userProps.user.description}
                                </span>
                            </span>
                            {showMoreAboutMe ? "" : (
                                <span className="text-[16px] text-zinc-500 font-semibold break-words cursor-pointer relative leading-5 hover:underline transition-all" onClick={handleShowMoreAboutMe}>
                                    <span className="overflow-hidden relative">
                                        See more
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex border-t border-solid border-zinc-200">
                <a href="" className="w-full h-full">
                    <div className="py-[16px] flex flex-row items-center justify-center gap-2 relative text-zinc-500 hover:text-black transition-all">
                        <span className="text-[16px] text-center font-semibold break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                Show all details
                            </span>
                        </span>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </i>
                    </div>
                </a>
            </footer>
        </section>
    );
};

export default UserProfileAbout;