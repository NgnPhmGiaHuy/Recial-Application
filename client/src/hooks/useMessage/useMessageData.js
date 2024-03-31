"use client"

import { useState } from "react";

import { useUserData } from "@/hooks";

const useMessageData = () => {
    const { userProps } = useUserData();

    const [messageId, setMessageId] = useState(null);

    const handleChangeMessageId = (messageId) => {
        return setMessageId(messageId);
    }

    return { userProps, messageId, handleChangeMessageId }
}

export default useMessageData;