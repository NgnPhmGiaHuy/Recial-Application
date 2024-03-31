"use client"

import { useEffect, useRef, useState } from "react";

import { useScrollHandler } from "@/hooks";
import { getGroupPostData } from "@/app/api/fetchGroupData";

const useGetGroupFeedPostData = (user) => {
    const postRef = useRef();

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const [groupPostProps, setGroupPostProps] = useState([]);
    const [fetchedGroupIds, setFetchedGroupIds] = useState([]);

    const getRandomGroupId = () => {
        if (!user || !user.group_list || !Array.isArray(user.group_list) || user.group_list.length === 0) {
            return null;
        }

        const { group_list } = user;

        const availableGroupIds = group_list.filter((groupId) => !fetchedGroupIds.includes(groupId._id));

        if (availableGroupIds.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * availableGroupIds.length);

        return availableGroupIds[randomIndex]._id;
    };

    const fetchPostData = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const groupId = getRandomGroupId();

            if (groupId) {
                const groupPostData = await getGroupPostData({ groupId, page });

                console.log(groupPostData)
                if (!groupPostData || groupPostData.error) {
                    return { error: "Error fetch group post data" };
                }

                if (Array.isArray(groupPostData)) {
                    if (page <= 1) {
                        setGroupPostProps(groupPostData);
                    } else {
                        setGroupPostProps((prevPosts) => [...prevPosts, ...groupPostData]);
                    }
                    setPage((prevPage) => prevPage + 1);
                }

                setFetchedGroupIds((prevGroupIds) => [...prevGroupIds, groupId]);
            }
        } catch (error) {
            return console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(0);
        setGroupPostProps([]);
        setFetchedGroupIds([]);
    }, [user]);

    useEffect(() => {
        if (user && user.group_list) {
            fetchPostData();
        }
    }, [user]);

    useScrollHandler(async () => {
        if (postRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.8 && !loading) {
            await fetchPostData();
        }
    }, [user, loading, fetchPostData]);

    return { postRef, groupPostProps, setGroupPostProps };
}

export default useGetGroupFeedPostData;