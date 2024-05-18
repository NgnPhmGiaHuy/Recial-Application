"use client"

import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

const useMediaCheckFollow = () => {
    const userProps = useSelector(state => state.user, shallowEqual);
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const [hasFollow, setHasFollow] = useState(false);

    useEffect(() => {
        const updateFollowStatus = () => {
            if (userProps?.user?._id === mediaProps?.user?._id) {
                return setHasFollow(true);
            } else {
                userProps?.user?.following.map((value) => {
                    const foundUser = value?.user?._id === mediaProps?.user?._id;
                    if (foundUser) {
                        setHasFollow(foundUser);
                    }
                })
            }
        };

        updateFollowStatus();
    }, [userProps, mediaProps]);

    return { hasFollow };
};

export default useMediaCheckFollow;