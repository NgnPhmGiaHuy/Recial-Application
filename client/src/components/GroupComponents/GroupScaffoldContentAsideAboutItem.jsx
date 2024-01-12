const GroupScaffoldContentAsideAboutItem = ({ groupProps }) => {
    return (
        <>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                    <div className="flex flex-col relative">
                        <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {groupProps?.group_description}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row items-center relative">
                    <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            <i>
                                {groupProps?.group_privacy === "Public" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth={1.5}
                                         stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                                    </svg>
                                )}
                            </i>
                        </div>
                    </div>
                    <div className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col relative">
                            <div>
                                <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {groupProps?.group_privacy}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {groupProps?.group_privacy === "Public" ? "Anyone can see who's in the group and what they post." : "Only members can see who's in the group and what they post."}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row items-center relative">
                    <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            <i>
                                {groupProps?.group_visible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth={1.5}
                                         stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth={1.5}
                                         stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
                                    </svg>
                                )}
                            </i>
                        </div>
                    </div>
                    <div className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col relative">
                            <div>
                                <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Visible
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {groupProps?.group_visible ? "Anyone can find this group." : "This group is not discoverable by everyone."}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupScaffoldContentAsideAboutItem;