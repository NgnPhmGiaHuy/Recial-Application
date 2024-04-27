"use client"

import { useEffect} from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { getPagePostDataById } from "@/utils";
import { setPagePostData } from "@/store/actions/page/pageActions";

const useGetPagePostData = (pageId) => {
    const dispatch = useDispatch();

    const { postRef, postProps } = useFetchAndScroll(pageId, (page) => getPagePostDataById({ pageId, page }));

    useEffect(() => {
        if (postProps) {
            dispatch(setPagePostData({ ref: postRef, posts: postProps }))
        }
    }, [postRef, postProps, dispatch]);

    return { postRef, pagePostProps: postProps };
}

export default useGetPagePostData;