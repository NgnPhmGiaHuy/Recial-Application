"use client"

import { shallowEqual, useSelector } from "react-redux";

import { useGetUserDataFetcher } from "@/hooks";
import { setUserSettingData } from "@/store/actions/user/userActions";
import { CreatePostDialogAudience, CreatePostDialogCard, CreatePostDialogGif } from "@/components";

const CreatePostDialog = ({ createPostRef }) => {
    const { showCreatePostAudience, showCreatePostPanel } = useSelector(state => state.toggle, shallowEqual);

    useGetUserDataFetcher("setting", setUserSettingData);

    return (
        <div className="z-[9999] relative">
            <div className="top-0 right-0 bottom-0 left-0 z-0 fixed bg-[rgba(0,0,0,0.75)]">
                <div className="min-h-screen flex flex-col grow items-stretch justify-center animate-float relative">
                    <div className="min-h-[500px] px-[8px] pt-[56px] flex items-start justify-center">
                        <div className="flex flex-col rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden bg-white relative">
                            <div ref={createPostRef} className="w-[750px] h-[700px] overflow-hidden relative">
                                <div className={`${showCreatePostPanel ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-full pointer-events-none"} w-full h-full top-0 left-0 absolute`}>
                                    <CreatePostDialogCard/>
                                </div>
                                <div className={`${showCreatePostAudience ? "opacity-100 visible translate-x-0 animate-movePanelRightToLeft" : "opacity-0 invisible translate-x-full pointer-events-none"} top-0 left-0 absolute `}>
                                    <CreatePostDialogAudience/>
                                </div>
                                {/*<div className={`${true ? "opacity-100 visible translate-x-0 animate-movePanelRightToLeft" : "opacity-0 invisible translate-x-full pointer-events-none"} top-0 left-0 absolute `}>*/}
                                {/*    <CreatePostDialogGif/>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialog;