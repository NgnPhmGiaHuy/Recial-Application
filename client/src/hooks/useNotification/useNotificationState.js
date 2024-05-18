"use client"

import { useCallback, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useFilteredNotification } from "@/hooks";

const useNotificationState = () => {
    const userProps = useSelector(state => state.user, shallowEqual);

    const [showTypeNotification, setShowTypeNotification] = useState("all");

    const { filteredNotifications , setShowUnreadNotification } = useFilteredNotification(userProps);

    const handleTypeClick = useCallback((type) => {
        setShowUnreadNotification(type === "unread");
        setShowTypeNotification(type);
    }, []);

    return { showTypeNotification, handleTypeClick, filteredNotifications };
};

export default useNotificationState;