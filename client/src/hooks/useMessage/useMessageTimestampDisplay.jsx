"use client"

import { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { shouldDisplayMessageWithTimeStamp } from "@/utils";

const useMessageTimestampDisplay = () => {
    const messageProps = useSelector((state) => state.message, shallowEqual);
    const [timestampDisplayMemo, setTimestampDisplayMemo] = useState({});

    useEffect(() => {
        if (messageProps?.message_list?.messages?.length > 0) {
            const firstMessage = messageProps.message_list.messages[0];
            const updatedMemo = {};

            messageProps.message_list.messages.forEach((message) => {
                updatedMemo[message._id] = shouldDisplayMessageWithTimeStamp(message, firstMessage);
            });

            setTimestampDisplayMemo(updatedMemo);
        }
    }, [messageProps?.message_list?.messages]);

    return timestampDisplayMemo;
};

export default useMessageTimestampDisplay;
