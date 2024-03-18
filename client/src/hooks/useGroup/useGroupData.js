"use client"

import useSWR from "swr";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useDecodeToken, useFetchAndScroll } from "@/hooks";
import { getGroupPostData } from "@/app/api/fetchGroupData";
import fetcherWithoutAccessToken from "@/app/api/fetcherWithoutAccessToken";
import { clearGroupCurrentUserRole, setGroupActivityData, setGroupCurrentUserRole, setGroupData, setGroupMemberData } from "@/store/actions/group/groupActions";

export const useGroupData = (groupId) => {
    const { userRole } = useCheckUserGroupRole(groupId);
    const { groupProps } = useGetGroupData(groupId);
    const { groupMemberProps } = useGetGroupMemberData(groupId);
    const { groupActivityProps } = useGetGroupActivityData(groupId);

    const { postRef, groupPostProps } = useGetGroupPostData(groupId);

    const groupData = {
        groupPostProps: groupPostProps,
    };

    return { postRef, groupData, userRole };
}

export const useFilterUserGroupsByRole = () => {
    const decodedToken = useDecodeToken();
    const joinedGroups = [];
    const managedGroups = [];

    if (decodedToken?.roles?.group) {
        Object.entries(decodedToken.roles.group).forEach(([groupId, userRole]) => {
            if (userRole === "group_member") {
                joinedGroups.unshift(groupId);
            } else {
                managedGroups.unshift(groupId);
            }
        });
    }

    return { managedGroups, joinedGroups };
};

export const useGetGroupDataAfterFilterUserRole = (managedGroups, joinedGroups) => {
    const [joinedGroupsProps, setJoinedGroupsProps] = useState(null);
    const [managedGroupsProps, setManagedGroupsProps] = useState(null);

    const { data: joinedGroupsData } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/group/groups/?groups=${joinedGroups.join(',')}`, fetcherWithoutAccessToken)
    const { data: managedGroupsData } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/group/groups/?groups=${managedGroups.join(',')}`, fetcherWithoutAccessToken)

    useEffect(() => {
        if (joinedGroupsData) {
            setJoinedGroupsProps(joinedGroupsData.map((groupProps) => ({
                profile: {
                    ...groupProps,
                }
            })))
        }

        if (managedGroupsData) {
            setManagedGroupsProps(managedGroupsData.map((groupProps) => ({
                profile: {
                    ...groupProps,
                }
            })))
        }
    }, [joinedGroupsData, managedGroupsData]);

    return { managedGroupsProps, joinedGroupsProps };
}

export const useUserGroupData = (user) => {
    const { postRef, groupPostProps, setGroupPostProps } = useUserGetGroupPostData(user);

    return { postRef, groupPostProps, setGroupPostProps };
}

const useCheckUserGroupRole = (groupIds) => {
    const decodedToken = useDecodeToken();
    const dispatch = useDispatch();

    const [userRole, setUserRole] = useState(null);

    const checkUserRole = () => {
        if (decodedToken?.roles?.group) {
            Object.entries(decodedToken.roles.group).forEach(([groupId, userRole]) => {
                if (groupId === groupIds) {
                    setUserRole(userRole);

                    return dispatch(setGroupCurrentUserRole(userRole));
                }
            });
        }
    };

    useEffect(() => {
        dispatch(clearGroupCurrentUserRole());

        return checkUserRole();
    }, [groupIds, decodedToken]);

    return { userRole };
};

const useGetGroupData = (groupId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/group/?group=${groupId}`, fetcherWithoutAccessToken)

    useEffect(() => {
        if (data) {
            dispatch(setGroupData(data));
        }
    }, [data, dispatch]);

    return { groupProps: data, groupError: error, groupIsLoading: isLoading, groupValidating: isValidating };
}

const useGetGroupMemberData = (groupId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/group/member/?group=${groupId}`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setGroupMemberData(data));
        }
    }, [data, dispatch]);

    return { groupMemberProps: data, groupMemberError: error, groupMemberIsLoading: isLoading, groupMemberIsValidating: isValidating };
}

const useGetGroupActivityData = (groupId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/group/activity/?group=${groupId}`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setGroupActivityData(data));
        }
    }, [data, dispatch]);

    return { groupActivityProps: data, groupActivityError: error, groupActivityIsLoading: isLoading, groupActivityIsValidating: isValidating };
}

const useGetGroupPostData = (groupId) => {
    const { postRef, postProps, setPostProps } = useFetchAndScroll(groupId, (page) => getGroupPostData({ groupId, page }),);

    return { postRef, groupPostProps: postProps, setGroupPostProps: setPostProps };
}

const useUserGetGroupPostData = (user) => {
    const router = useRouter();

    const postRef = useRef();

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const [groupPostProps, setGroupPostProps] = useState([]);
    const [fetchedGroupIds, setFetchedGroupIds] = useState([]);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

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
    }, [user, router]);

    useEffect(() => {
        const handleScroll = debounce(async () => {
            if (postRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.8 && !loading) {
                await fetchPostData();
            }
        }, 200);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [user, loading, fetchPostData]);

    return { postRef, groupPostProps, setGroupPostProps };
}