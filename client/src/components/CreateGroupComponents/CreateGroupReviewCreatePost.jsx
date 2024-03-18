import { CreatePostOptionItem } from "@/components";

import CREATE_POST_OPTION from "@/constants/CreatePostConstants/CreatePostOptionConstants";

const CreateGroupReviewCreatePost = () => {
    const createPostOptionItemList = CREATE_POST_OPTION();

    return (
        <div>
            <div className="w-full flex flex-col relative">
                <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white cursor-not-allowed overflow-hidden relative">
                    <div className="px-[16px] pt-[12px] pb-[10px] flex flex-wrap items-center opacity-50 relative">
                        <div className="w-full mb-[16px] pb-[12px] border-b border-solid border-zinc-200 relative">
                            <div className="before:w-[3px] before:h-[90%] before:top-[-5px] before:left-[-16px] before:rounded-md before:bg-lime-500 before:absolute">
                                <span className="block text-[16px] text-black text-left font-medium break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        Create Post
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row flex-shrink items-start grow">
                            <div className="mr-[8px] flex bg-transparent relative">
                                <div className="inline-block align-bottom relative">
                                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[80px] px-[12px] py-[8px] flex flex-row grow items-start justify-start outline-none bg-zinc-100 rounded-xl relative">
                                <div className="text-[17px] text-zinc-500 hyphens-auto break-words leading-6">
                                    <span className="overflow-hidden line-clamp-2 relative">
                                        Share some what you are thinking?
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full min-h-[20px] mt-[6px] pt-[4px] flex flex-wrap justify-between overflow-hidden relative">
                            <div className="flex flex-row flex-shrink items-center justify-center relative">
                                {createPostOptionItemList.map((value, index) => (
                                    <CreatePostOptionItem key={index} createPostItemData={value} cursorNotAllow={true}/>
                                ))}
                            </div>
                            <div className="flex flex-row flex-shrink-0 items-center justify-center relative">
                                <div className="mr-[16px]">
                                    <div className="sm:px-[12px] px-[10px] sm:py-[4px] py-0 rounded-full outline outline-solid outline-lime-700 text-lime-700">
                                        <span className="block text-[12px] text-center font-medium break-words leading-5">
                                            <span className="overflow-hidden relative">
                                                Preview
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewCreatePost;