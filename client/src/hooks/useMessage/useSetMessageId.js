"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { setMessageActions } from "@/store/actions/message/messageAction";

const useSetMessageId = (params) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [messageId, setMessageId] = useState(params?.messageId || null);

    const handleChangeMessageId = (id) => {
        setMessageId(id);

        return router.replace(`/messages/${id}`);
    }

    dispatch(setMessageActions(handleChangeMessageId));

    return { messageId, handleChangeMessageId };
};

export default useSetMessageId;