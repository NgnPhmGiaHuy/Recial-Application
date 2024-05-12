"use client"

import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

const useMessageSearch = () => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const [userMessages, setUserMessages] = useState(userProps?.user_messages?.message_list?.messages || []);

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setUserMessages(userProps?.user_messages?.message_list?.messages || []);
    }, [userProps?.user_messages?.message_list?.messages]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredMessages = userMessages.filter(message =>
        message.conversation_name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return { searchQuery, filteredMessages, handleSearchInputChange };
}

export default useMessageSearch;