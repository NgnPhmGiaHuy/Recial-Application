"use client"

import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { getConversationData } from "@/utils";
import { clearMessageData, setNoMoreMessages, setMessageConversationInfo, setMessageData, setMessageLoading, updateMessageData } from "@/store/actions/message/messageAction";

const useGetMessageDataByConversationId = (messageId) => {
    const dispatch = useDispatch();
    const messageItemRef = useRef(null);

    const [page, setPage] = useState(0);
    const [prevHeight, setPrevHeight] = useState(0);
    const [isAtTop, setIsAtTop] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchTriggered, setFetchTriggered] = useState(false);

    const fetchMessageData = async () => {
        if (isLoading) return;

        setIsLoading(true);
        dispatch(setMessageLoading(true));

        try {
            const messageData = await getConversationData(messageId, page);

            if (!messageData || messageData.error) {
                return { error: messageData ? messageData.error : "Error fetching conversation message data" };
            }

            if (messageData.no_more_messages) {
                dispatch(setNoMoreMessages(true));
            }

            if (messageData) {
                const reversedMessageData = [...messageData.messages].reverse();

                if (page <= 1) {
                    dispatch(setMessageData({ ref: messageItemRef, messages: reversedMessageData}))
                } else {
                    dispatch(updateMessageData(reversedMessageData))
                }
                dispatch(setMessageConversationInfo(messageData.conversation))
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            dispatch(setMessageLoading(false));
        }
    }

    useEffect(() => {
        if (messageItemRef && messageItemRef.current) {
            if (page <= 2) {
                messageItemRef.current.scrollTop = messageItemRef.current.scrollHeight;
                setPrevHeight(messageItemRef.current.scrollHeight);
            } else {
                messageItemRef.current.scrollTop = messageItemRef.current.scrollHeight - prevHeight;
                setPrevHeight(messageItemRef.current.scrollHeight);
            }
        }
    }, [page]);

    useEffect(() => {
        setPage(0);
        setIsAtTop(false);
        dispatch(clearMessageData());
        dispatch(setNoMoreMessages(false));

        return () => {};
    }, [messageId]);

    useEffect(() => {
        fetchMessageData();
    }, [messageId]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop } = messageItemRef.current;

            return setIsAtTop(scrollTop === 0);
        };

        if (messageItemRef.current) {
            messageItemRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (messageItemRef.current) {
                messageItemRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [messageItemRef.current]);

    useEffect(() => {
        if (isAtTop && !isLoading && !fetchTriggered && page > 1) {
            fetchMessageData();

            return setFetchTriggered(true);
        }
    }, [isAtTop, isLoading, fetchTriggered, page]);

    useEffect(() => {
        if (!isAtTop && fetchTriggered && !isLoading) {
            return setFetchTriggered(false);
        }
    }, [isAtTop, fetchTriggered, isLoading]);

    return { isLoading, messageItemRef };
}

export default useGetMessageDataByConversationId;