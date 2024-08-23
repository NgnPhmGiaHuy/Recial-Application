"use client"

import { useEffect, useState } from "react";

import { ChevronDownIcon, ChevronUpIcon, VideoUploadScaffoldDataContentPrivacyOption } from "@/components";

const VideoUploadScaffoldDataContentPrivacy = ({ videoProps, setVideoProps }) => {
    const [videoPrivacy, setVideoPrivacy] = useState("Followers");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible((prevState) => !prevState);
    };

    const handlePrivacyChange = (option) => {
        setVideoPrivacy(option);
        setDropdownVisible(false);
    };

    useEffect(() => {
        setVideoProps((prevState) => ({
            ...prevState,
            meta: {
                ...prevState.meta,
                privacy: videoPrivacy,
            },
        }));
    }, [videoPrivacy, setVideoProps]);

    return (
        <div>
            <div className="mb-[16px]">
                <div className="mb-[12px]">
                    <span className="block text-[16px] text-black text-left font-medium relative leading-5">
                        Who can watch this video
                    </span>
                </div>
                <div className="max-w-full w-[340px] relative">
                    <div onClick={toggleDropdown}>
                        <div className="h-[40px] pr-[8px] pl-[12px] flex items-center cursor-pointer bg-black/[0.05] rounded-xl relative">
                            <div className="flex-1">
                                { videoPrivacy }
                            </div>
                            <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                                { dropdownVisible ? (
                                    <ChevronUpIcon fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} />
                                ) : (
                                    <ChevronDownIcon fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} />
                                ) }
                            </div>
                        </div>
                    </div>
                    { dropdownVisible && (
                        <div className="left-0 top-[44px] absolute z-10">
                            <div className="min-w-[240px] w-[340px]">
                                <ul className="max-h-[230px] p-[4px] overflow-auto bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                                    { ["Public", "Followers", "Friends", "Only you"].map((option) => (
                                        <VideoUploadScaffoldDataContentPrivacyOption key={option} option={option} selectedPrivacy={videoPrivacy} onClick={handlePrivacyChange}/>
                                    )) }
                                </ul>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataContentPrivacy;