"use client"

import { useEffect, useRef, useState } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import { NOTIFICATION_TYPE_OF_COLOR } from "@/constants/HeaderConstants";

const useNotificationHeaderItemAction = ({ notificationProps }) => {
    const notificationQuickSettingItemRef = useRef(null);
    const notificationQuickSettingItemButtonRef = useRef(null);

    const [notificationQuickSettingItemTranslateXValue, setNotificationQuickSettingItemTranslateXValue] = useState(0);

    const [showHeaderNotificationContentItemMoreButton, setShowNotificationMessageContentItemMoreButton] = useState(false)
    const [showHeaderNotificationItemQuickSetting, setShowHeaderNotificationItemQuickSetting, handleShowHeaderNotificationQuickSettingButton] = useToggleState(false);

    const notificationSvgIcon = NOTIFICATION_TYPE_OF_COLOR[notificationProps.notification_type]?.icon || NOTIFICATION_TYPE_OF_COLOR.default.icon;
    const notificationTextColor = NOTIFICATION_TYPE_OF_COLOR[notificationProps.notification_type]?.textColor || NOTIFICATION_TYPE_OF_COLOR.default.textColor;
    const notificationBackgroundColor = NOTIFICATION_TYPE_OF_COLOR[notificationProps.notification_type]?.backgroundColor || NOTIFICATION_TYPE_OF_COLOR.default.backgroundColor;

    useEffect(() => {
        if (notificationQuickSettingItemRef.current && notificationQuickSettingItemButtonRef.current && showHeaderNotificationItemQuickSetting) {
            setNotificationQuickSettingItemTranslateXValue(notificationQuickSettingItemRef.current.clientWidth - notificationQuickSettingItemButtonRef.current.clientWidth - 5)
        }
    }, [showHeaderNotificationItemQuickSetting])

    useClickOutside(notificationQuickSettingItemButtonRef, showHeaderNotificationItemQuickSetting, setShowHeaderNotificationItemQuickSetting);

    return { notificationQuickSettingItemRef, notificationQuickSettingItemButtonRef, notificationSvgIcon, notificationTextColor, notificationBackgroundColor, notificationQuickSettingItemTranslateXValue, showHeaderNotificationContentItemMoreButton, showHeaderNotificationItemQuickSetting, setShowNotificationMessageContentItemMoreButton, handleShowHeaderNotificationQuickSettingButton };
}

export default useNotificationHeaderItemAction;