"use client"

import { shallowEqual, useSelector } from "react-redux";

import { useCreatePostDialogAudience } from "@/hooks";
import { ArrowLeftIcon, CreatePostDialogAudienceItem, PrimaryActionButton } from "@/components";

import CREATE_POST_AUDIENCE from "@/constants/CreatePostConstants/CreatePostDialogAudienceConstants";

const renderAudienceItems = (userProps, handleCreatePostAudienceChecked) => {
    return CREATE_POST_AUDIENCE.map((value, index) => {
        return (
            <CreatePostDialogAudienceItem key={index} createPostAudienceData={value} checked={userProps?.settings?.privacy?.post_visibility === value.option} onSelect={() => handleCreatePostAudienceChecked(index)} />
        );
    });
};

const CreatePostDialogAudience = () => {
    const userProps = useSelector(state => state.user, shallowEqual);

    const { handleCreatePostAudienceChecked, handleShowCreatePostAudience, handleCancel } = useCreatePostDialogAudience();

    return (
        <div className="min-w-[750px] relative">
            <div>
                <div className="h-[60px] flex items-center justify-center border-b border-solid border-zinc-200">
                    <span className="block text-[20px] text-black font-bold break-words leading-6">
                        <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                            Post Audience
                        </span>
                    </span>
                </div>
                <div className="top-[12px] left-[16px] absolute">
                    <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-x-hidden cursor-pointer bg-zinc-200 hover:bg-zinc-300 relative" onClick={handleShowCreatePostAudience}>
                        <ArrowLeftIcon fill="none" stroke="currentColor" strokeWidth={2}/>
                    </div>
                </div>
            </div>
            <div >
                <div className="max-h-full flex flex-col">
                    <div className="min-h-[35rem] flex flex-col flex-shrink grow basis-full overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-contain relative">
                        <div className="pt-[16px] pb-[24px] flex flex-col grow relative">
                            <div className="mt-[-16px] mb-[16px]">
                                <div className="pt-[20px] pb-[4px] flex flex-col relative">
                                    <div className="px-[16px] flex flex-col grow relative">
                                        <span className="block text-[20px] text-black font-semibold break-words leading-6">
                                            <span className="overflow-hidden line-clamp-2 relative">
                                                Who can see your post?
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-[-4px] mb-[-16px]">
                                    <div className="px-[16px] flex flex-row flex-shrink grow items-center relative">
                                        <div className="py-[12px] flex flex-col flex-shrink grow relative">
                                            <span className="block text-[15px] text-zinc-500 font-normal break-words leading-5">
                                                Your post will show up in Feed, on your profile and in search results.
                                            </span>
                                            <span className="block text-[15px] text-zinc-500 font-normal break-words leading-5">
                                                Your audience now is set to {`${userProps?.settings?.privacy?.post_visibility}`}, but you can change the audience default on the setting.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[-4px] mb-[-16px] relative">
                                {renderAudienceItems(userProps, handleCreatePostAudienceChecked)}
                            </div>
                        </div>
                    </div>
                    <div className="py-[6px] border-t border-solid border-zinc-200">
                        <div className="px-[16px] py-[8px] flex flex-row flex-nowrap items-stretch justify-end relative">
                            <div className="p-[6px] flex flex-col relative">
                                <div className="w-full h-full inline-flex flex-col justify-center cursor-pointer relative">
                                    <div className="w-[120px] h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-md relative hover:bg-zinc-100 transition-all" onClick={handleCancel}>
                                        <span className="block text-[15px] text-lime-700 font-semibold break-words leading-5">
                                            <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                Cancel
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-[6px] flex flex-col relative">
                                <PrimaryActionButton handleClick={handleShowCreatePostAudience} label="Done" style={{ width: "120px", minWidth: "100px", margin: "0", height: "36px", flexGrow: "none", padding: "0 12px", borderRadius: "0.375rem" }} hoverStyle={{ outline: "none" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialogAudience;