"use client"

import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { getMessageData } from "@/utils";
import { clearMessageData, setMessageData, setMessageLoading } from "@/store/actions/message/messageAction";

const useGetMessageDataByUserId = (messageId) => {
    const dispatch = useDispatch();
    const messageItemRef = useRef(null);

    const [page, setPage] = useState(0);
    const [messageProps, setMessageProps] = useState(null);
    const [isAtTop, setIsAtTop] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchTriggered, setFetchTriggered] = useState(false);

    const fetchMessageData = async () => {
        if (isLoading) return;

        setIsLoading(true);
        dispatch(setMessageLoading(true));

        try {
            const messageData = await getMessageData(messageId, page);

            if (Array.isArray(messageData)) {
                const reversedMessageData = [...messageData].reverse();

                if (page <= 1) {
                    setMessageProps(messageData.reverse());
                    dispatch(setMessageData({ ref: messageItemRef, messages: reversedMessageData}))
                } else {
                    setMessageProps((prevPosts) => [...prevPosts, ...reversedMessageData]);
                    dispatch(setMessageData({ ref: messageItemRef, messages: [...messageProps, ...reversedMessageData] }))
                }
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
        setPage(0);
        setIsAtTop(false);
        setMessageProps(null);
        dispatch(clearMessageData());

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

    return { isLoading, messageItemRef, messageProps, setMessageProps };
}

export default useGetMessageDataByUserId;