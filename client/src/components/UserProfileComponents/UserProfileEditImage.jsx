"use client"

import Image from "next/image";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useSingleImageData } from "@/hooks";
import { CameraIcon, XMarkIcon } from "@/components";

const UserProfileEditImage = ({ formData, setFormData }) => {
    const userProps = useSelector(state => state.user, shallowEqual);

    const [coverImageFileInputRef, selectedCoverImage, setSelectedCoverImage, handleCoverImageFileUpload, handleCoverImageTriggerClick] = useSingleImageData();
    const [profileImageFileInputRef, selectedProfileImage, setSelectedProfileImage, handleProfileImageFileUpload, handleProfileImageTriggerClick] = useSingleImageData();

    const updateFormData = (key, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    useEffect(() => {
        updateFormData("session_profile_picture_url", selectedProfileImage || formData?.session_profile_picture_url);
        updateFormData("session_profile_cover_photo_url", selectedCoverImage || formData?.session_profile_cover_photo_url);
    }, [selectedCoverImage, selectedProfileImage]);

    return (
        <>
            <div className="max-h-[200px] flex flex-col flex-shrink-0 items-stretch justify-center overflow-hidden relative">
                <div className="flex flex-col border border-solid border-zinc-200">
                    <div className="flex flex-col flex-shrink-0 grow items-stretch justify-center relative">
                        <div className="w-full pb-[calc(100%/3)] relative">
                            <div className="w-full h-full top-0 bottom-0 left-0 absolute">
                                <div className="w-full h-full overflow-hidden relative">
                                    {formData?.session_profile_cover_photo_url && (
                                        <Image src={formData?.session_profile_cover_photo_url}
                                               alt={`${formData?.session_profile_cover_photo_url}-image`} fill={true}
                                               sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    )}
                                    {selectedCoverImage && (
                                        <Image src={selectedCoverImage} alt={`${selectedCoverImage}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    )}
                                </div>
                                <div className="w-full h-full inset-0 absolute bg-black/20 z-10"></div>
                                <input ref={coverImageFileInputRef} type="file" className="hidden" accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
                                       multiple={false} onChange={handleCoverImageFileUpload}/>
                            </div>
                        </div>
                        <div className="w-full h-full top-0 flex flex-col items-center justify-center opacity-75 absolute z-30">
                            <div className="flex flex-row gap-6 items-center justify-center relative">
                                <div className="w-[44px] h-[44px] rounded-xl overflow-hidden bg-black/60 hover:bg-black/80 transition-all" onClick={handleCoverImageTriggerClick}>
                                    <div className="w-full h-full flex items-center justify-center text-white cursor-pointer relative">
                                        <CameraIcon fill="none" stroke="currentColor" />
                                    </div>
                                </div>
                                <div className="w-[44px] h-[44px] rounded-xl overflow-hidden bg-black/60 hover:bg-black/80 transition-all" onClick={() => setSelectedCoverImage(userProps?.user?.profile?.profile_cover_photo_url)}>
                                    <div className="w-full h-full flex items-center justify-center text-white cursor-pointer relative">
                                        <XMarkIcon fill="none" stroke="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[116px] w-1/4 mt-[-44px] ml-[16px] flex flex-col grow items-stretch justify-center bg-white rounded-md border-4 border-solid border-white overflow-hidden relative z-50">
                <div className="w-full h-full overflow-visible">
                    <div className="w-full pb-[100%] relative">
                        <div className="w-full h-full top-0 bottom-0 left-0 absolute">
                            <div className="w-full h-full overflow-hidden relative">
                                <Image src={selectedProfileImage || formData?.session_profile_picture_url}
                                       alt={`${selectedProfileImage || formData?.session_profile_picture_url}-image`} fill={true}
                                       sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                            <div className="w-full h-full inset-0 absolute bg-black/30 z-10"></div>
                            <input ref={profileImageFileInputRef} type="file" className="hidden"
                                   accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
                                   multiple={false} onChange={handleProfileImageFileUpload}/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full top-0 flex flex-col items-center justify-center opacity-75 absolute z-30">
                    <div className="flex flex-row items-center justify-center relative">
                        <div className="w-[44px] h-[44px] rounded-xl overflow-hidden bg-black/60 hover:bg-black/80 transition-all" onClick={handleProfileImageTriggerClick}>
                            <div className="w-full h-full flex items-center justify-center text-white cursor-pointer relative">
                                <CameraIcon fill="none" stroke="currentColor" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileEditImage;