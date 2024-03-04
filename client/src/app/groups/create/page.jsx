"use client"

import {useRef, useState} from "react";

import { CreateGroupAside, CreateGroupReview, Header} from "@/components";
import { useClickOutside, useMultipleHandleState, useToggleState, useUserData } from "@/hooks";

const CreateGroupPage = () => {
    const { userProps, setUserProps } = useUserData();

    const createGroupPrivacyRef = useRef(null);
    const createGroupVisibleRef = useRef(null);

    const [groupPrivacy, setGroupPrivacy] = useState("Public");
    const [groupVisible, setGroupVisible] = useState("Visible");
    const [inputData, setInputData] = useState({ inputValue: "", isInputFocused: false });

    const [showGroupPrivacySetting, setShowGroupPrivacySetting, handleGroupPrivacySettingButton] = useToggleState(false);
    const [showGroupVisibleSetting, setShowGroupVisibleSetting, handleGroupVisibleSettingButton] = useToggleState(false);

    const handleInputFocus = () => {
        setInputData(prevState => ({ ...prevState, isInputFocused: true }));
    };

    const handleInputBlur = () => {
        setInputData(prevState => ({ ...prevState, isInputFocused: false }));
    };

    const handleInputChange = (event) => {
        setInputData(prevState => ({ ...prevState, inputValue: event.target.value }));
    };

    const handleSetGroupPrivacy = (privacy) => {
        setGroupPrivacy(privacy)

        return handleGroupPrivacySettingButton();
    }

    const handleSetGroupVisible = (visible) => {
        setGroupVisible(visible);

        return handleGroupVisibleSettingButton();
    }

    useClickOutside(createGroupPrivacyRef, showGroupPrivacySetting, handleGroupPrivacySettingButton);
    useClickOutside(createGroupVisibleRef, showGroupVisibleSetting, handleGroupVisibleSettingButton);

    const state = { inputData, groupPrivacy, groupVisible, showGroupPrivacySetting, showGroupVisibleSetting };
    const handleState = useMultipleHandleState({ handleInputFocus, handleInputBlur, handleInputChange, handleSetGroupPrivacy, handleSetGroupVisible, handleGroupPrivacySettingButton, handleGroupVisibleSettingButton });

    return (
        userProps && (
            <>
                <div>
                    <Header userProps={userProps}/>
                    <div className="flex flex-col relative">
                        <div className="flex flex-col relative z-0 ">
                            <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                                <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                    <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                        <div className="w-[calc(380px+12px)] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                            <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                                <CreateGroupAside userProps={userProps} state={state} handleState={handleState} createGroupPrivacyRef={createGroupPrivacyRef} createGroupVisibleRef={createGroupVisibleRef}/>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                                            <CreateGroupReview state={state} handleState={handleState}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default CreateGroupPage;