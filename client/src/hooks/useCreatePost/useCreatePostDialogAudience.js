"use client"

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";

import { setUserSettingData } from "@/store/actions/user/userActions";
import { toggleCreatePostAudience, toggleCreatePostPanel } from "@/store/actions/toggle/toggleActions";
import CREATE_POST_AUDIENCE from "@/constants/CreatePostConstants/CreatePostDialogAudienceConstants";

const useCreatePostDialogAudience = () => {
    const dispatch = useDispatch();
    const userProps = useSelector(state => state.user, shallowEqual);

    const [previousVisibility, setPreviousVisibility] = useState(null);

    const updateSettings = (newSettings) => {
        dispatch(setUserSettingData(newSettings));
    };

    const handleCreatePostAudienceChecked = useCallback((index) => {
        const newPostSettingPrivacy = CREATE_POST_AUDIENCE[index].option;

        setPreviousVisibility(userProps?.settings?.privacy?.post_visibility);

        updateSettings({
            ...userProps,
            privacy: {
                ...userProps.privacy,
                post_visibility: newPostSettingPrivacy
            }
        });

    }, [userProps?.settings?.privacy?.post_visibility]);

    const handleShowCreatePostAudience = () => {
        dispatch(toggleCreatePostPanel());

        return dispatch(toggleCreatePostAudience());
    }

    const handleCancel = () => {
        if (previousVisibility !== null) {
            updateSettings({
                ...userProps,
                privacy: {
                    ...userProps.privacy,
                    post_visibility: previousVisibility
                }
            });
        }

        return handleShowCreatePostAudience();
    }

    useEffect(() => {

    }, [userProps?.settings?.privacy?.post_visibility]);

    return { handleCreatePostAudienceChecked, handleShowCreatePostAudience, handleCancel };
}

export default useCreatePostDialogAudience;