"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { useUserIdData } from "@/hooks/useUser/useUserIdData";
import { getPostDataByUserId } from "@/app/api/fetchPostDataById";
import { setUserPostData } from "@/store/actions/user/userActions";
import { setUserIdPostData } from "@/store/actions/user/userIdActions";

const usePostDataByUserId = (userId) => {
    const dispatch = useDispatch();
    const isCurrentUser = useUserIdData(userId);

    const { postRef: postByIdRef, postProps: postByUserIdProps, setPostProps: setPostByUserIdProps } = useFetchAndScroll(userId, (page) => getPostDataByUserId({ userId, page }),);

    useEffect(() => {
        if (postByUserIdProps && isCurrentUser) {
            dispatch(setUserPostData({ ref: postByIdRef, posts: postByUserIdProps }));
        }
        if (postByUserIdProps && !isCurrentUser) {
            dispatch(setUserIdPostData({ ref: postByIdRef, posts: postByUserIdProps }));
        }
    }, [postByIdRef, postByUserIdProps, dispatch])


    return { postByIdRef, postByUserIdProps, setPostByUserIdProps };
};


export default usePostDataByUserId;