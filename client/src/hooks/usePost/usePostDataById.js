"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { getPostDataByUserId } from "@/utils";
import { useUserIdData } from "@/hooks/useUser/useUserIdData";
import { setUserPostData } from "@/store/actions/user/userActions";
import { clearUserIdPostData, setUserIdPostData } from "@/store/actions/user/userIdActions";

const usePostDataByUserId = (userId) => {
    const dispatch = useDispatch();
    const isCurrentUser = useUserIdData(userId);

    const { postRef: postByIdRef, postProps: postByUserIdProps } = useFetchAndScroll(userId, (page) => getPostDataByUserId({ userId, page }));

    useEffect(() => {
        dispatch(clearUserIdPostData());

        if (postByUserIdProps && isCurrentUser) {
            dispatch(setUserPostData({ ref: postByIdRef, posts: postByUserIdProps }));
        }
        if (postByUserIdProps && !isCurrentUser) {
            dispatch(setUserIdPostData({ ref: postByIdRef, posts: postByUserIdProps }));
        }
    }, [userId, postByIdRef, postByUserIdProps])


    return { postByIdRef, postByUserIdProps };
};


export default usePostDataByUserId;