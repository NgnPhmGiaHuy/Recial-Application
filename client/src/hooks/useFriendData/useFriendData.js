"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";

import { handleNewUserData } from "@/utils";
import { useUserData, useWebSocket } from "@/hooks";

const useFriendData = () => {
    const dispatch = useDispatch();

    const { userProps } = useUserData();
    const [friendId, setFriendId] = useState(null);

    const handleFriendClick = (clickedFriendId) => {
        return setFriendId(clickedFriendId);
    };

    const onDataReceived = async (data) => {
        await handleNewUserData(data, dispatch);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return { userProps, friendId, handleFriendClick };
};


export default useFriendData;