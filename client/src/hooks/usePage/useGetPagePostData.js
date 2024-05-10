"use client"

import { useEffect} from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { setPagePostData } from "@/store/actions/page/pageActions";

const useGetPagePostData = (pageId) => {
    const dispatch = useDispatch();

    const { postRef, postProps } = useFetchAndScroll(pageId, (page) => fetchDataWithAccessToken(process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/page/post/?page=${pageId}&scrollPage=${page}`, "GET"));

    useEffect(() => {
        if (postProps) {
            dispatch(setPagePostData({ ref: postRef, posts: postProps }))
        }
    }, [postRef, postProps, dispatch]);

    return { postRef, pagePostProps: postProps };
}

export default useGetPagePostData;