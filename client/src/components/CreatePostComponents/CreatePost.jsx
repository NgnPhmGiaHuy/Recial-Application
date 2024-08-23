import Link from "next/link";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { toggleCreatePost } from "@/store/actions/toggle/toggleActions";
import { CreatePostOptionItem, ImageIcon } from "@/components";
import { createPostOptionItemListConstants } from "@/constants/CreatePostConstants";

const CreatePost = () => {
    const dispatch = useDispatch();

    const userProps = useSelector(state => state.user, shallowEqual);

    const handleToggleShowCreatePost = () => {
        dispatch(toggleCreatePost());
    }

    const createPostOptionItemList = createPostOptionItemListConstants(handleToggleShowCreatePost);

    return (
        <div className="mb-[16px]">
            <div className="w-full flex flex-col relative">
                <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden relative">
                    <div className="px-[16px] pt-[12px] pb-[10px] flex flex-wrap items-center relative">
                        <div className="w-full mb-[16px] pb-[12px] border-b border-solid border-zinc-200 relative">
                            <div className="before:w-[3px] before:h-[90%] before:top-[-5px] before:left-[-16px] before:rounded-md before:bg-lime-500 before:absolute">
                                <span className="block text-[16px] text-black font-medium leading-5 overflow-hidden">
                                    Create Post
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex items-start grow">
                            <Link href={`/${userProps?.user?._id}`} className="mr-[8px] flex bg-transparent relative">
                                <ImageIcon src={userProps?.user?.profile?.profile_picture_url} />
                            </Link>
                            <div className="h-[80px] px-[12px] py-[8px] flex grow items-start justify-start cursor-pointer bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-all relative" onClick={handleToggleShowCreatePost}>
                                <div className="text-[17px] text-zinc-500 break-words leading-6 overflow-hidden line-clamp-2">
                                    Share some what you are thinking, {userProps?.user?.profile?.username || `${userProps?.user?.profile?.firstname} ${userProps?.user?.profile?.lastname}`}?
                                </div>
                            </div>
                        </div>
                        <div className="w-full min-h-[20px] mt-[6px] pt-[4px] flex justify-between overflow-hidden relative">
                            <div className="flex items-center relative">
                                { createPostOptionItemList.map((value, index) => (
                                    <CreatePostOptionItem key={index} createPostItemData={value} />
                                )) }
                            </div>
                            <div className="flex items-center relative">
                                <div className="mr-[16px] sm:px-[12px] px-[10px] sm:py-[4px] py-0 rounded-full outline outline-solid outline-lime-700 text-lime-700 cursor-pointer hover:outline-2 hover:bg-lime-100 transition-all">
                                    <span className="block text-[12px] text-center font-medium leading-5 overflow-hidden">
                                        Preview
                                    </span>
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