"use client"

import { useEffect} from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { getPagePostDataById } from "@/app/api/fetchPageData";
import { setPagePostData } from "@/store/actions/page/pageActions";

const useGetPagePostData = (pageId) => {
    const dispatch = useDispatch();

    const { postRef, postProps, setPostProps } = useFetchAndScroll(pageId, (page) => getPagePostDataById({ pageId, page }));

    useEffect(() => {
        if (postProps) {
            dispatch(setPagePostData({ ref: postRef, posts: postProps }))
        }
    }, [postRef, postProps, dispatch]);

    return { postRef, pagePostProps: postProps, setPagePostProps: setPostProps };
}

export default useGetPagePostData;