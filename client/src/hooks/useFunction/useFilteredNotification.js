"use client"

import { useMemo, useState } from "react";

const useFilteredNotification = (entity) => {
    const [showUnreadNotification, setShowUnreadNotification] = useState(false);

    const filteredNotifications = useMemo(() => {
        if (!entity?.notifications) return { newNotifications: [], otherNotifications: [] };

        const currentTime = Date.now();
        const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day

        const { newNotifications, otherNotifications } = entity?.notifications.reduce(
            (accumulator, notification) => {
                const isUnread = !notification.is_read;
                if ((showUnreadNotification && isUnread) || !showUnreadNotification) {
                    const updatedAt = new Date(notification.updated_at).getTime();
                    const timeDifference = currentTime - updatedAt;
                    const withinOneDay = timeDifference <= oneDay;

                    if (withinOneDay) {
                        accumulator.newNotifications.push(notification);
                    } else {
                        accumulator.otherNotifications.push(notification);
                    }
                }
                return accumulator;
            },
            { newNotifications: [], otherNotifications: [] }
        );

        return { newNotifications, otherNotifications };
    }, [entity?.notifications, showUnreadNotification]);

    return { filteredNotifications, showUnreadNotification, setShowUnreadNotification };
};

export default useFilteredNotification;