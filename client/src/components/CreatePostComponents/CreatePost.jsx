import Image from "next/image";

import { CreatePostOptionItem } from "@/components";
import { createPostOptionItemListConstants } from "@/constants/CreatePostConstants";

const CreatePost = ({ userProps, handleShowCreatePost }) => {
    const createPostOptionItemList = createPostOptionItemListConstants(handleShowCreatePost);

    return (
        <div className="mb-[16px]">
            <div className="w-full flex flex-col relative">
                <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden relative">
                    <div className="px-[16px] pt-[12px] pb-[10px] flex flex-wrap items-center relative">
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
                            <a href={`/${userProps?.user?._id}`} className="mr-[8px] flex bg-transparent relative">
                                <div className="inline-block align-bottom relative">
                                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative">
                                        <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    </div>
                                </div>
                            </a>
                            <div className="h-[80px] px-[12px] py-[8px] flex flex-row grow items-start justify-start cursor-pointer outline-none bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-all relative" onClick={handleShowCreatePost}>
                                <div className="text-[17px] text-zinc-500 hyphens-auto break-words leading-6">
                                    <span className="overflow-hidden line-clamp-2 relative">
                                        Share some what you are thinking, {userProps?.user?.username}?
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full min-h-[20px] mt-[6px] pt-[4px] flex flex-wrap justify-between overflow-hidden relative">
                            <div className="flex flex-row flex-shrink items-center justify-center relative">
                                {createPostOptionItemList.map((value, index) => (
                                    <CreatePostOptionItem key={index} createPostItemData={value}/>
                                ))}
                            </div>
                            <div className="flex flex-row flex-shrink-0 items-center justify-center relative">
                                <div className="mr-[16px]">
                                    <div className="sm:px-[12px] px-[10px] sm:py-[4px] py-0 rounded-full outline outline-solid outline-lime-700 text-lime-700 cursor-pointer hover:outline-2 hover:bg-lime-100 transition-all">
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

export default CreatePost;