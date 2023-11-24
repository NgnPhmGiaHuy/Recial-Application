import Image from "next/image";

import {CreatePostOptionItem} from "@/components";
import {createPostOptionItemList} from "@/constants/CreatePostConstants";

const CreatePost = ({userData, handleShowCreatePost}) => {
    return (
        <div className="w-full flex flex-col relative">
            <div className="w-full rounded-md shadow-md bg-white overflow-x-hidden overflow-y-hidden relative">
                <div className="px-[16px] pt-[12px] pb-[10px] flex flex-wrap items-center">
                    <div className="w-full flex flex-row flex-shrink items-start grow">
                        <a href="" className="mr-[8px] flex bg-transparent relative">
                            <div className="inline-block align-bottom relative">
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative">
                                    <Image src={userData.user.profile_picture_url} alt={`${userData.user.profile_picture_url}-image`} fill className="object-cover"/>
                                </div>
                            </div>
                        </a>
                        <div className="px-[12px] py-[8px] flex flex-row grow items-center justify-start cursor-pointer outline-none bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-all relative" onClick={handleShowCreatePost}>
                            <div className="text-[17px] text-zinc-500 hyphens-auto break-words leading-6">
                                <span className="overflow-x-hidden overflow-y-hidden line-clamp-2 relative">
                                    What's on your mind, {userData.user.username}?
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-h-[40px] mt-[12px] pt-[8px] flex flex-wrap justify-around overflow-x-hidden overflow-y-hidden border-t border-solid border-zinc-200 relative">
                        {createPostOptionItemList.map((value, index) => (
                            <CreatePostOptionItem key={index} createPostItemData={value}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;