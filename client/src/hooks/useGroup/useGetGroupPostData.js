"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { getGroupPostData } from "@/utils";
import { setGroupPostData } from "@/store/actions/group/groupActions";

const useGetGroupPostData = (groupId) => {
    const dispatch = useDispatch();

    const { postRef: ref, postProps } = useFetchAndScroll(groupId, (page) => getGroupPostData({ groupId, page }),);

    useEffect(() => {
        if (postProps) {
            dispatch(setGroupPostData({ ref: ref, posts: postProps }));
        }
    }, [ref, postProps, dispatch])

    return { ref, groupPostProps: postProps };
}

export default useGetGroupPostData;