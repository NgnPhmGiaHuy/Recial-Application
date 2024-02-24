"use client"

import Image from "next/image";
import { useCallback } from "react";

import { createReactionData } from "@/app/api/fetchReactionData";

import Like from "/public/images/Icon/like.png";
import Dislike from "/public/images/Icon/dislike.png";
import Happiness from "/public/images/Icon/happiness.png";
import Unhappiness from "/public/images/Icon/sad.png";

const PostItemReactionButton = ({ timeoutRef, postReactionButtonRef, props, handleState, translateX, translateY }) => {
    const setRefs = useCallback(
        (node) => {
            timeoutRef.current = node;
            postReactionButtonRef.current = node;
        },
        [postReactionButtonRef, timeoutRef]
    );

    const handleReaction = async (reactionType) => {
        try {
            await createReactionData(reactionType, props.postProps?.post?._id, "Post");

            return handleState.handleShowPostReactionButton();
        } catch (error) {
            return console.error(error);
        }
    }

    return (
        <div ref={setRefs} className="top-0 left-0 translate-x-6 translate-y-0 absolute z-[999]"
             onMouseEnter={handleState.handleMouseEnter} onMouseLeave={handleState.handleMouseLeave}
             style={{"--tw-translate-y": `${translateY.postItemReactionButtonTranslateYValue}px`}}>
            <div className="animate-float py-[5px] flex whitespace-nowrap rounded-full shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white relative">
                <div className="flex flex-col flex-shrink-0 grow relative">
                    <div className="flex flex-row flex-nowrap items-stretch justify-between relative">
                        <div className="flex flex-col flex-shrink grow basis-0 relative" onClick={() => handleReaction("Like")}>
                            <div className="mx-[4px] flex flex-row flex-shrink-0 items-center basis-auto cursor-pointer relative">
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150">
                                    <Image src={Like} alt={`${Like}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-shrink grow basis-0 relative" onClick={() => handleReaction("Dislike")}>
                            <div className="mx-[4px] flex flex-row flex-shrink-0 items-center basis-auto cursor-pointer relative">
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150">
                                    <Image src={Dislike} alt={`${Dislike}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-shrink grow basis-0 relative" onClick={() => handleReaction("Happiness")}>
                            <div className="mx-[4px] flex flex-row flex-shrink-0 items-center basis-auto cursor-pointer relative">
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150">
                                    <Image src={Happiness} alt={`${Happiness}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-shrink grow basis-0 relative" onClick={() => handleReaction("Unhappiness")}>
                            <div className="mx-[4px] flex flex-row flex-shrink-0 items-center basis-auto cursor-pointer relative">
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150">
                                    <Image src={Unhappiness} alt={`${Unhappiness}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItemReactionButton;