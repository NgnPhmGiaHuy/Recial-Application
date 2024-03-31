"use client"

import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

import { useFilteredNotification } from "@/hooks";

const useNotificationState = () => {
    const userProps = useSelector(state => state.user);

    const [showTypeNotification, setShowTypeNotification] = useState("all");

    const { filteredNotifications , setShowUnreadNotification } = useFilteredNotification(userProps);

    const handleTypeClick = useCallback((type) => {
        setShowUnreadNotification(type === "unread");
        setShowTypeNotification(type);
    }, []);

    return { showTypeNotification, handleTypeClick, filteredNotifications };
};

export default useNotificationState;