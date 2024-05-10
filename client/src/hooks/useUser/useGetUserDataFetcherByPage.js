"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchDataWithAccessToken } from "@/utils";
import { setUserMessageData, setUserMessageLoading } from "@/store/actions/user/userActions";

const useGetUserDataFetcherByPage = () => {
    const dispatch = useDispatch();
    const messageRef = useRef(null);
    const userProps = useSelector(state => state.user, shallowEqual);
    const userMessages = useMemo(() => userProps.user_messages, [userProps.user_messages])

    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [fetchTriggered, setFetchTriggered] = useState(false);

    const fetchUserMessageData = async () => {
        if (isLoading) return;

        setIsLoading(true);
        dispatch(setUserMessageLoading(true));

        try {
            const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/user/message/?page=${page}`;

            const messageData = await fetchDataWithAccessToken(url, "GET");

            if (!messageData || messageData.error) {
                return { error: messageData ? messageData.error : "Error fetching user message data" };
            }

            if (Array.isArray(messageData)) {
                const newMessages = page < 1 ? messageData : [...userMessages.message_list?.messages, ...messageData];
                dispatch(setUserMessageData({ ref: messageRef, messages: newMessages }));
                setPage(prevPage => prevPage + 1);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            dispatch(setUserMessageLoading(false));
        }
    };

    useEffect(() => {
        if (!userMessages.message_list) {
            fetchUserMessageData();
        }
    }, []);

    useEffect(() => {
        if (messageRef.current) {
            const handleScroll = () => {
                const { scrollTop, scrollHeight, clientHeight } = messageRef.current;

                return setIsAtBottom(scrollTop + clientHeight === scrollHeight);
            };

            messageRef.current.addEventListener("scroll", handleScroll);

            return () => {
                if (messageRef.current) {
                    messageRef.current.removeEventListener("scroll", handleScroll);
                }
            };
        }
    }, [messageRef.current]);

    useEffect(() => {
        if (isAtBottom && !isLoading && !fetchTriggered && page > 1) {
            fetchUserMessageData();

            return setFetchTriggered(true);
        }
    }, [isAtBottom, isLoading, fetchTriggered, page]);

    useEffect(() => {
        if (!isAtBottom && fetchTriggered && !isLoading) {
            return setFetchTriggered(false);
        }
    }, [isAtBottom, fetchTriggered, isLoading]);

    return { isLoading };
}

export default useGetUserDataFetcherByPage;
