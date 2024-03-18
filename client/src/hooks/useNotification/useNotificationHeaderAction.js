"use client"

import { useSelector } from "react-redux";
import { useEffect, useRef, useState, useCallback } from "react";

import { useClickOutside, useFilteredNotification, useToggleState } from "@/hooks";

const useNotificationHeaderAction = () => {
    const userProps = useSelector(state => state.user);

    const notificationQuickSettingButtonRef = useRef(null);

    const [showTypeNotification, setShowTypeNotification] = useState("all");

    const [notificationTranslateXValue, setNotificationTranslateXValue] = useState(0);
    const [notificationQuickSettingTranslateYValue, setNotificationQuickSettingTranslateYValue] = useState(0);

    const [showNotificationQuickSetting, setShowNotificationQuickSetting, handleNotificationQuickSettingButton] = useToggleState(false);

    const { filteredNotifications, showUnreadNotification, setShowUnreadNotification } = useFilteredNotification(userProps);

    const handleTypeClick = useCallback((type) => {
        if (type === "unread") {
            setShowUnreadNotification(true)
        } else {
            setShowUnreadNotification(false);
        }

        setShowTypeNotification(type);
    }, []);

    useEffect(() => {
        if (notificationQuickSettingButtonRef.current && notificationQuickSettingButtonRef.current && showNotificationQuickSetting) {
            setNotificationTranslateXValue(notificationQuickSettingButtonRef.current.clientWidth - notificationQuickSettingButtonRef.current.clientWidth - 32)
        }

        if (notificationQuickSettingButtonRef.current && showNotificationQuickSetting) {
            setNotificationQuickSettingTranslateYValue(-notificationQuickSettingButtonRef.current.clientHeight);
        }
    }, [showNotificationQuickSetting]);

    useClickOutside(notificationQuickSettingButtonRef, showNotificationQuickSetting, setShowNotificationQuickSetting);

    return { notificationQuickSettingButtonRef, showTypeNotification, showNotificationQuickSetting, notificationTranslateXValue, notificationQuickSettingTranslateYValue, filteredNotifications, handleTypeClick, handleNotificationQuickSettingButton };
}

export default useNotificationHeaderAction;