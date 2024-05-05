"use client"

import { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { shouldDisplayMessageWithTimeStamp } from "@/utils";

const useMessageTimestampDisplay = () => {
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const [timestampDisplayMemo, setTimestampDisplayMemo] = useState({});

    useEffect(() => {
        if (messageProps?.message_list?.messages?.length > 0) {
            const updatedMemo = {};
            const messages = messageProps.message_list.messages;

            for (let i = 0; i < messages.length; i++) {
                const currentMessage = messages[i];
                const prevMessage = i > 0 ? messages[i - 1] : null;
                updatedMemo[currentMessage._id] = shouldDisplayMessageWithTimeStamp(currentMessage, prevMessage);
            }

            setTimestampDisplayMemo(updatedMemo);
        }
    }, [messageProps?.message_list?.messages]);

    return timestampDisplayMemo;
};

export default useMessageTimestampDisplay;
