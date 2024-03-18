import { CreatePostDialogCustomizationItem } from "@/components";

import CREATE_POST_CONTENT_CUSTOMIZATION from "@/constants/CreatePostConstants/CreatePostContentCustomizationConstants";

const CreatePostDialogCardNavigation = () => {
    const createPostContentCustomizationItemList = CREATE_POST_CONTENT_CUSTOMIZATION();

    return (
        <div>
            <div className="mx-[16px] p-[8px] flex items-center justify-between border border-solid border-zinc-500 rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                <div className="px-[8px]">
                    <div className="inline-flex flex-row items-stretch cursor-pointer relative">
                        <span className="block text-[15px] text-black font-semibold break-words leading-5">
                            <span className="overflow-hidden relative">
                                Add to your post
                            </span>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        { createPostContentCustomizationItemList.slice(0, 5).map((value, index) => (
                            <CreatePostDialogCustomizationItem key={index} createPostContentCustomizationData={value}/>
                        )) }
                        <div className="m-[2px]">
                            <span>
                                <div className="inline-flex flex-row items-stretch cursor-pointer relative">
                                    <div className="w-[36px] h-[36px] rounded-xl relative bg-transparent hover:bg-zinc-200">
                                        <div className="w-full h-full flex items-center justify-center relative">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
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
    );
};

export default CreatePostDialogCardNavigation;