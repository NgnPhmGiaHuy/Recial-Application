import Image from "next/image";

const CreatePostDialogHeader = ({userProps, handleShowCreatePost, handeShowCreatePostAudience}) => {
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
                        <div className="mr-[12px]">
                            <div className="inline-block align-bottom relative">
                                <div className="w-[56px] h-[56px] rounded-full overflow-hidden relative">
                                    <Image src={userProps.user.profile_picture_url} alt={`${userProps.user.profile_picture_url}-image`} fill className="object-cover"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="flex flex-row flex-shrink-0 relative">
                                <span className="block text-[20px] text-black font-semibold break-words leading-5">
                                    <span className="overflow-x-hidden overflow-y-hidden relative">
                                        {userProps.user.username}
                                    </span>
                                </span>
                            </div>
                            <div className="mt-[4px]">
                                <div className="flex items-center relative">
                                    <div className="flex flex-row basis-auto items-stretch justify-center cursor-pointer relative">
                                        <span className="block text-[14px] text-black font-semibold break-words leading-4">
                                            <div className="px-[8px] py-[4px] rounded-md bg-zinc-200 relative">
                                                <div className="flex items-center justify-center">
                                                    <div className="mr-[4px] inline-flex items-center justify-center">
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                                            </svg>
                                                        </i>
                                                    </div>
                                                    <span className="mr-[4px] inline-flex items-center justify-center">
                                                        <span className="overflow-x-hidden overflow-y-hidden relative">
                                                            Only me
                                                        </span>
                                                    </span>
                                                    <div className="inline-flex items-center justify-center">
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
        </div>
    )
}

export default CreatePostDialogHeader;