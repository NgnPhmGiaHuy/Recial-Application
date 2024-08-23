"use client"

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useUpdateUserProfile } from "@/hooks";
import { toggleEditProfile } from "@/store/actions/toggle/toggleActions";
import { ChevronRightIcon, UserProfileEditHeader, UserProfileEditImage, UserProfileEditInput } from "@/components";

const UserProfileEdit = ({ editProfileRef }) => {
    const dispatch = useDispatch();

    const { formData, setFormData, submitStatus, handleSetUserProfile } = useUpdateUserProfile();

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmitForm = async () => {
        await handleSetUserProfile();
    }

    const handleToggleEditProfile = () => {
        dispatch(toggleEditProfile());
    };

    useEffect(() => {
        handleToggleEditProfile();
    }, [submitStatus]);

    return (
        <div className="w-screen h-full top-0 left-0 flex flex-row items-center justify-center fixed bg-black/25 animate-float z-[999]">
            <div ref={editProfileRef} className="max-w-[80vw] max-h-[90vh] min-w-[600px] min-h-[400px] h-[650px] flex flex-shrink items-stretch basis-auto overflow-hidden relative">
                <div className="flex flex-col flex-shrink grow items-stretch basis-auto bg-white rounded-xl relative">
                    <div className="max-w-[600px] min-h-0 w-full mx-auto flex flex-col flex-shrink grow items-stretch relative">
                        <div className="flex flex-col flex-shrink grow items-stretch rounded-xl overflow-auto no-scrollbar basis-auto relative">
                            <UserProfileEditHeader handleSubmitForm={handleSubmitForm}/>
                            <div className="pb-[64px] flex flex-col flex-shrink-0 items-stretch basis-auto relative">
                                <UserProfileEditImage formData={formData} setFormData={setFormData}/>
                                <UserProfileEditInput formData={formData} setFormData={setFormData} handleFormChange={handleFormChange}/>
                                <Link href="/settings/categories/account">
                                    <div className="min-h-[48px] px-[16px] py-[12px] flex flex-col items-stretch justify-center cursor-pointer outline-none relative hover:bg-zinc-100 transition-all">
                                        <div className="flex flex-row grow relative">
                                            <div className="flex flex-shrink grow relative">
                                                 <span className="block text-[20px] text-black text-left font-normal break-words relative leading-6">
                                                     Switch to more customize
                                                </span>
                                            </div>
                                            <div className="w-[20px] h-[20px] pl-[12px] flex flex-shrink-0 relative">
                                                <div className="w-full h-full flex items-center justify-center relative">
                                                    <ChevronRightIcon fill="none" stroke="currentColor" width={20} height={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileEdit;