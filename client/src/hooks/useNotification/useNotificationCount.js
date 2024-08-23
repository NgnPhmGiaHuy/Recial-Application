"use client"

import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

const useNotificationCount = () => {
    const [notificationUnreadCount, setNotificationUnreadCount] = useState(0);

    const notifications = useSelector(state => state.user.notifications, shallowEqual);

    useEffect(() => {
        setNotificationUnreadCount(
            notifications?.filter(notification => !notification.is_read).length || 0
        );
    }, [notifications]);

    return notificationUnreadCount;
}

export default useNotificationCount;