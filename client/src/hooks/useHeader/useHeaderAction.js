"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useClickOutside, useMultipleRefs } from "@/hooks";
import { toggleHeaderMenu, toggleHeaderMessage, toggleHeaderNotification, toggleHeaderPersonalAccount, toggleHeaderSearchHistory } from "@/store/actions/toggle/toggleActions";

const useHeaderAction = (userProps) => {
    const dispatch = useDispatch();

    const { showMenu, showMessage, showNotification, showSearchHistory, showPersonalAccount } = useSelector(state => state.toggle);

    const [notificationUnreadCount, setNotificationUnreadCount] = useState(0);

    const headerRef = useMultipleRefs({ menuButtonRef: null, messageButtonRef: null, notificationButtonRef: null, searchHistoryButtonRef: null, personalAccountButtonRef: null });

    useClickOutside(headerRef.menuButtonRef, showMenu, () => dispatch(toggleHeaderMenu()));
    useClickOutside(headerRef.messageButtonRef, showMessage, () => dispatch(toggleHeaderMessage()));
    useClickOutside(headerRef.notificationButtonRef, showNotification, () => dispatch(toggleHeaderNotification()));
    useClickOutside(headerRef.searchHistoryButtonRef, showSearchHistory, () => dispatch(toggleHeaderSearchHistory()));
    useClickOutside(headerRef.personalAccountButtonRef, showPersonalAccount, () => dispatch(toggleHeaderPersonalAccount()));

    useEffect(() => {
        setNotificationUnreadCount(
            userProps?.notifications?.filter(notification => !notification.is_read).length
        );
    }, [userProps?.notifications]);

    return { showMenu, showMessage, showNotification, showSearchHistory, showPersonalAccount, headerRef,notificationUnreadCount };
}

export default useHeaderAction;