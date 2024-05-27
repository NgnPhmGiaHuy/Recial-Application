"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { fetchDataWithoutAccessToken } from "@/utils";
import { setGroupPostData } from "@/store/actions/group/groupActions";

const useGetGroupPostData = (groupId) => {
    const dispatch = useDispatch();

    const { dataRef, data } = useFetchAndScroll(groupId, (page) => fetchDataWithoutAccessToken(process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/post/?group=${groupId}&page=${page}`, "GET"));

    useEffect(() => {
        if (data) {
            dispatch(setGroupPostData({ ref: dataRef, posts: data }));
        }
    }, [dataRef, data, dispatch])

    return { dataRef, data };
}

export default useGetGroupPostData;