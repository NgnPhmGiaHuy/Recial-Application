import Image from "next/image";

const CreatePostDialogHeader = ({ userProps, handleShowCreatePost, handeShowCreatePostAudience }) => {
    return(
        <div>
            <div className="relative">
                <div className="h-[60px] flex items-center justify-center border-b border-solid border-zinc-200 relative">
                    <span className="block text-[20px] text-black font-bold leading-6">
                        <span className="overflow-x-hidden overflow-y-hidden text-ellipsis whitespace-nowrap break-words relative">
                            Create post
                        </span>
                    </span>
                </div>
                <div className="top-[12px] right-[16px] absolute">
                    <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-hidden cursor-pointer bg-zinc-200 relative hover:bg-zinc-300" onClick={handleShowCreatePost}>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
            <div className="mx-[16px] py-[16px] flex items-center relative">
                <div className="inline-block relative">
                    <div className="min-w-[300px] p-[12px] flex flex-row items-center rounded-xl cursor-pointer relative hover:bg-zinc-100" onClick={handeShowCreatePostAudience}>
                        <div className="mr-[12px] inline-block align-bottom relative">
                            <div className="w-[56px] h-[56px] rounded-full overflow-hidden relative">
                                <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="flex flex-row flex-shrink-0 relative">
                                <span className="block text-[20px] text-black font-semibold break-words leading-5">
                                    <span className="overflow-x-hidden overflow-y-hidden relative">
                                        {userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname}
                                    </span>
                                </span>
                            </div>
                            <div className="mt-[4px] flex items-center relative">
                                <div className="flex flex-row basis-auto items-stretch justify-center cursor-pointer relative">
                                    <span className="block text-[14px] text-black font-semibold break-words leading-4">
                                        <div className="px-[8px] py-[4px] rounded-md bg-zinc-200 relative">
                                            <div className="flex items-center justify-center">
                                                <div className="mr-[4px] inline-flex items-center justify-center">
                                                    <i>
                                                        {userProps?.setting?.privacy?.post_visibility === "Public" ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor" className="w-3 h-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                                                            </svg>
                                                        ) : userProps?.setting?.privacy?.post_visibility === "Private" ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor" className="w-3 h-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                                            </svg>
                                                        ) : userProps?.setting?.privacy?.post_visibility === "Friends" ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor" className="w-3 h-3">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                                                            </svg>
                                                        ) : userProps?.setting?.privacy?.post_visibility === "Specific_Friends" ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor" className="w-3 h-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                                            </svg>
                                                        ) : null}
                                                    </i>
                                                </div>
                                                <span className="mr-[4px] inline-flex items-center justify-center">
                                                    <span className="overflow-x-hidden overflow-y-hidden relative">
                                                        {userProps?.setting?.privacy?.post_visibility}
                                                    </span>
                                                </span>
                                                <div className="inline-flex items-center justify-center">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                        </svg>
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostDialogHeader;