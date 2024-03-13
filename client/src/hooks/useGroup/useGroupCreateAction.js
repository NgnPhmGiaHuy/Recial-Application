"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useClickOutside, useMultipleHandleState, useMultipleRefs } from "@/hooks";
import { toggleGroupPrivacy, toggleGroupVisible } from "@/store/actions/toggle/toggleActions";

const useGroupCreateAction = () => {
    const dispatch = useDispatch();
    const createGroupActionRef = useMultipleRefs({ createGroupPrivacyRef: null, createGroupVisibleRef: null });

    const [groupPrivacy, setGroupPrivacy] = useState("Public");
    const [groupVisible, setGroupVisible] = useState("Visible");
    const [inputData, setInputData] = useState({ inputValue: "", isInputFocused: false });

    const { showGroupPrivacy } = useSelector(state => state.toggle);
    const { showGroupVisible } = useSelector(state => state.toggle);

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

        return dispatch(toggleGroupPrivacy());
    }

    const handleGroupPrivacySettingButton = () => {
        return dispatch(toggleGroupPrivacy());
    }

    const handleSetGroupVisible = (visible) => {
        setGroupVisible(visible);

        return dispatch(toggleGroupVisible());
    }

    const handleGroupVisibleSettingButton = () => {
        return dispatch(toggleGroupVisible());
    }

    useClickOutside(createGroupActionRef.createGroupPrivacyRef, showGroupPrivacy, handleGroupPrivacySettingButton);
    useClickOutside(createGroupActionRef.createGroupVisibleRef, showGroupVisible, handleGroupVisibleSettingButton);

    const state = { inputData, groupPrivacy, groupVisible };
    const handleState = useMultipleHandleState({ handleInputFocus, handleInputBlur, handleInputChange, handleSetGroupPrivacy, handleSetGroupVisible, handleGroupPrivacySettingButton, handleGroupVisibleSettingButton });

    return { createGroupActionRef, state, handleState };
}

export default useGroupCreateAction;