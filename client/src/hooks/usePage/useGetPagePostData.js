"use client"

import { useEffect} from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { setPagePostData } from "@/store/actions/page/pageActions";

const useGetPagePostData = (pageId) => {
    const dispatch = useDispatch();

    const { dataRef, data } = useFetchAndScroll(pageId, (page) => fetchDataWithAccessToken(process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/page/post/?page=${pageId}&scrollPage=${page}`, "GET"));

    useEffect(() => {
        if (data) {
            dispatch(setPagePostData({ ref: dataRef, posts: data }))
        }
    }, [dataRef, data, dispatch]);

    return { dataRef, data };
}

export default useGetPagePostData;