"use client"

import React, {useState, useCallback} from 'react';
import {CreatePostDialogAudienceItem} from "@/components";

import {createPostAudienceItemList} from "@/constants/CreatePostConstants";

const renderAudienceItems = (userData, createPostAudienceChecked, handleCreatePostAudienceChecked) => {
    return createPostAudienceItemList.map((value, index) => {
        const audienceOption = userData.post_audience[value.createPostAudienceOption];
        const audienceStatus = audienceOption && audienceOption.status;

        return (
            <CreatePostDialogAudienceItem key={index} createPostAudienceData={value} checked={createPostAudienceChecked === index} onSelect={() => handleCreatePostAudienceChecked(index)} disabled={!audienceStatus} />
        );
    });
};

const CreatePostDialogAudience = ({userData, handeShowCreatePostAudience}) => {
    const [createPostAudienceChecked, setCreatePostAudienceChecked] = useState(
        createPostAudienceItemList.findIndex(
            (item) => userData.post_audience[item.createPostAudienceOption].status
        )
    );
    const [setDefaultAudience, setSetDefaultAudience] = useState(false);

    const handleCreatePostAudienceChecked = useCallback((index) => {
        const selectedOption = createPostAudienceItemList[index].createPostAudienceOption;

        Object.keys(userData.post_audience).forEach((option) => {
            userData.post_audience[option].status = option === selectedOption;
        });

        setCreatePostAudienceChecked(index);
    }, [userData.post_audience]);

    const handleSetDefaultAudience = useCallback(() => {
        setSetDefaultAudience(!setDefaultAudience);
    }, [setDefaultAudience]);

    return (
        <div className="min-w-[750px] relative">
            <div className="">
                <div className="h-[60px] flex items-center justify-center border-b border-solid border-zinc-200">
                    <span className="block text-[20px] text-black font-bold break-words leading-6">
                        <span className="overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis relative">
                            Post Audience
                        </span>
                    </span>
                </div>
                <div className="top-[12px] left-[16px] absolute">
                    <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-x-hidden cursor-pointer bg-zinc-200 hover:bg-zinc-300 relative" onClick={handeShowCreatePostAudience}>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="max-h-[30rem] flex flex-col">
                    <div className="min-h-[29rem] flex flex-col flex-shrink grow basis-full overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-contain relative">
                        <div className="pt-[16px] pb-[24px] flex flex-col grow relative">
                            <div className="mt-[-16px] mb-[16px]">
                                <div className="pt-[20px] pb-[4px] flex flex-col relative">
                                    <div className="px-[16px] flex flex-col grow relative">
                                        <span className="block text-[20px] text-black font-semibold break-words leading-6">
                                            <span className="overflow-x-hidden overflow-y-hidden line-clamp-2 relative">
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
                                                Your default audience is set to {
                                                    (selectedAudience => selectedAudience ? selectedAudience.title : 'None')(
                                                        Object.values(userData.post_audience).find(
                                                            defaultAudience => defaultAudience.status === true
                                                        )
                                                    )
                                                }, but you can change the audience of this specific post.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[-4px] mb-[-16px] relative">
                                {renderAudienceItems(userData, createPostAudienceChecked, handleCreatePostAudienceChecked)}
                            </div>
                        </div>
                    </div>
                    <div className="py-[6px] border-t border-solid border-zinc-200">
                        <div className="px-[16px] py-[8px] flex flex-row flex-nowrap items-stretch justify-end relative">
                            <div className="p-[6px] flex flex-col relative">
                                <div className="w-full h-full inline-flex flex-col justify-center cursor-pointer relative">
                                    <div className="w-[120px] h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-md relative hover:bg-zinc-100 transition-all">
                                        <span className="block text-[15px] text-lime-700 font-semibold break-words leading-5">
                                            <span className="overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis relative">
                                                Cancel
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-[6px] flex flex-col relative">
                                <div className="w-full h-full inline-flex flex-col justify-center cursor-pointer relative">
                                    <div className="w-[120px] h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-md bg-lime-500 relative hover:bg-lime-700 transition-all">
                                        <span className="block text-[15px] text-white font-semibold break-words leading-5">
                                            <span className="overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis relative">
                                                Done
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

export default CreatePostDialogAudience;