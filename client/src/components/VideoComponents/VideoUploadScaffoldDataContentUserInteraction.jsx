"use client"

import { useState } from "react";

import { VideoUploadScaffoldDataContentUserInteractionOption } from "@/components";

const VideoUploadScaffoldDataContentUserInteraction = ({ videoProps, setVideoProps }) => {
    const [userInteractionOptions, setUserInteractionOptions] = useState({
        Duet: videoProps?.meta?.interaction?.allow_duet,
        Stitch: videoProps?.meta?.interaction?.allow_stitch,
        Comment: videoProps?.meta?.interaction?.allow_comments,
    });

    const handleUserInteractionOptionChange = (option) => {
        setUserInteractionOptions((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));

        setVideoProps((prevState) => ({
            ...prevState,
            meta: {
                ...prevState.meta,
                interaction: {
                    allow_duet: option === "Duet" ? !prevState.meta.interaction.allow_duet : prevState.meta.interaction.allow_duet,
                    allow_stitch: option === "Stitch" ? !prevState.meta.interaction.allow_stitch : prevState.meta.interaction.allow_stitch,
                    allow_comments: option === "Comment" ? !prevState.meta.interaction.allow_comments : prevState.meta.interaction.allow_comments,
                }
            }
        }))
    };

    return (
        <div>
            <div className="mb-[24px]">
                <div className="mt-[24px] mb-[8px]">
                    <span className="block text-[16px] text-black text-left font-medium relative leading-5">
                        Allow users to:
                    </span>
                </div>
                <div className="flex gap-6">
                    { ["Comment", "Duet", "Stitch"].map((option, index) => (
                        <VideoUploadScaffoldDataContentUserInteractionOption key={index} option={option} isChecked={userInteractionOptions[option]} onChange={handleUserInteractionOptionChange}/>
                    )) }
                </div>
                <div className="mt-[21px]">
                    <div>
                        <span className="block text-[14px] text-zinc-500 text-left font-normal relative leading-5">
                            Duet and Stitch aren’t available on videos from private accounts
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataContentUserInteraction;