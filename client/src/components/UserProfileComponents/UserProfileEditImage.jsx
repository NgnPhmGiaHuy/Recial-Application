"use client"

import Image from "next/image";
import { useEffect } from "react";

import { useSingleImageData } from "@/hooks";
import {useSelector} from "react-redux";

const UserProfileEditImage = ({ formData, setFormData }) => {
    const userProps = useSelector(state => state.user);

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
                        <div
                            className="w-full h-full top-0 flex flex-col items-center justify-center opacity-75 absolute z-30">
                            <div className="flex flex-row gap-6 items-center justify-center relative">
                                <div className="w-[44px] h-[44px] rounded-xl overflow-hidden bg-black/60 hover:bg-black/80 transition-all" onClick={handleCoverImageTriggerClick}>
                                    <div className="w-full h-full flex items-center justify-center text-white cursor-pointer relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div className="w-[44px] h-[44px] rounded-xl overflow-hidden bg-black/60 hover:bg-black/80 transition-all" onClick={() => setSelectedCoverImage(userProps?.user?.profile?.profile_cover_photo_url)}>
                                    <div className="w-full h-full flex items-center justify-center text-white cursor-pointer relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                            </svg>
                                        </i>
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
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileEditImage;