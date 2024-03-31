"use client"

import { useEffect, useRef, useState } from "react";
import {useClickOutside, useToggleState} from "@/hooks";

const useNotificationAnimation = () => {
    const noticeRef = useRef(null);
    const noticeQuickSettingRef = useRef(null);

    const [noticeTranslateXValue, setNoticeTranslateXValue] = useState(0);
    const [noticeQuickSettingTranslateYValue, setNoticeQuickSettingTranslateYValue] = useState(0);

    const [showNoticeQuickSetting, setShowNoticeQuickSetting, handleNoticeQuickSettingButton] = useToggleState(false);

    useEffect(() => {
        if (noticeRef.current && noticeQuickSettingRef.current && showNoticeQuickSetting) {
            setNoticeTranslateXValue(noticeRef.current.clientWidth - noticeQuickSettingRef.current.clientWidth - 32);
        }

        if (noticeQuickSettingRef.current && showNoticeQuickSetting) {
            setNoticeQuickSettingTranslateYValue(-noticeQuickSettingRef.current.clientHeight);
        }
    }, [showNoticeQuickSetting]);

    useClickOutside(noticeQuickSettingRef, showNoticeQuickSetting, handleNoticeQuickSettingButton)

    return { noticeRef, noticeQuickSettingRef, showNoticeQuickSetting, noticeTranslateXValue, noticeQuickSettingTranslateYValue, handleNoticeQuickSettingButton };

}

export default useNotificationAnimation;