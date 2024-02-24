"use client"

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { getGroupData, getGroupMemberData, getGroupActivityData, getGroupPostData } from "@/app/api/fetchGroupData";

export const useGroupData = (groupId, userId) => {
    const { groupProps, setGroupProps } = useGetGroupData(groupId);
    const { groupMemberProps, setGroupMemberProps } = useGetGroupMemberData(groupId);
    const { groupActivityProps, setGroupActivityProps } = useGetGroupActivityData(groupId);
    const { postRef, groupPostProps, setGroupPostProps } = useGetGroupPostData(groupId);

    const { userRole } = useCheckUserRole(groupMemberProps, userId);

    const groupData = {
        groupProps: groupProps,
        groupPostProps: groupPostProps,
        groupMemberProps: groupMemberProps,
        groupActivityProps: groupActivityProps,
    };

    const setGroupData = {
        setGroupProps: setGroupProps,
        setGroupPostProps: setGroupPostProps,
        setGroupMemberProps: setGroupMemberProps,
        setGroupActivityProps: setGroupActivityProps,
    }

    return { postRef, groupData, setGroupData, userRole };
}

export const useUserGroupData = (user) => {
    const { postRef, groupPostProps, setGroupPostProps } = useUserGetGroupPostData(user);

    return { postRef, groupPostProps, setGroupPostProps };
}

const useCheckUserRole = (groupMemberProps, userId) => {
    const [userRole, setUserRole] = useState(null)

    const checkUserRole = () => {
        const foundUser = groupMemberProps?.find((user) => user.user._id === userId);

        const userRoles = foundUser?.role || [];

        return setUserRole(userRoles);
    };

    useEffect(() => {
        checkUserRole();
    }, [groupMemberProps, userId]);

    return { userRole };
};

export const useFilterUserGroupsByRole = (user) => {
    const managedGroups = [];
    const joinedGroups = [];

    if (user?.group_list) {
        user.group_list.forEach((group) => {
            const { groupMemberProps, setGroupMemberProps } = useGetGroupMemberData(group._id);
            const { userRole } = useCheckUserRole(groupMemberProps, user?.user?._id);

            if (userRole === 'Member') {
                joinedGroups.unshift(group);
            } else {
                managedGroups.unshift(group);
            }
        });
    }

    return { managedGroups, joinedGroups };
};

const useGetGroupData = (groupId) => {
    const [groupProps, setGroupProps] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const groupData = await getGroupData(groupId);

            if (groupData && !groupData.error) {
                return setGroupProps(groupData);
            } else {
                return { error: "Error fetch group data" };
            }
        } catch (error) {
            return console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [groupId]);

    return { groupProps, setGroupProps };
};

const useGetGroupMemberData = (groupId) => {
    const [loading, setLoading] = useState(false);
    const [groupMemberProps, setGroupMemberProps] = useState(null);

    const fetchMemberData = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const groupMemberData = await getGroupMemberData(groupId);

            if (groupMemberData && !groupMemberData.error) {
                return setGroupMemberProps(groupMemberData);
            } else {
                return { error: "Error fetch group member data" };
            }
        } catch (error) {
            return console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMemberData();
    }, [groupId]);

    return { groupMemberProps, setGroupMemberProps };
};

const useGetGroupActivityData = (groupId) => {
    const [loading, setLoading] = useState(false);
    const [groupActivityProps, setGroupActivityProps] = useState(null);

    const fetchActivityData = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const groupActivityData = await getGroupActivityData(groupId);

            if (groupActivityData && !groupActivityData.error) {
                return setGroupActivityProps(groupActivityData);
            } else {
                return { error: "Error fetch group member data" };
            }
        } catch (error) {
            return console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchActivityData();
    }, [groupId]);

    return { groupActivityProps, setGroupActivityProps };
};

const useGetGroupPostData = (groupId) => {
    const router = useRouter();

    const postRef = useRef();

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [groupPostProps, setGroupPostProps] = useState([]);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const fetchPostData = async () => {
        if (loading) return;

        setLoading(true);

        try {
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
        } catch (error) {
            return console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(0);
        setGroupPostProps([]);

        return () => { };
    }, [groupId]);

    useEffect(() => {
        fetchPostData();
    }, [groupId, router]);

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
    }, [groupId, loading, fetchPostData]);

    return { postRef, groupPostProps, setGroupPostProps };
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