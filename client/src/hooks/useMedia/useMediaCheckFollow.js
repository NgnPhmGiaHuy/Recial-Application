"use client"

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useMediaCheckFollow = () => {
    const userProps = useSelector(state => state.user);
    const mediaProps = useSelector(state => state.media);

    const [hasFollow, setHasFollow] = useState(false);

    useEffect(() => {
        const updateFollowStatus = () => {
            if (userProps?.user?._id === mediaProps?.media?.user?._id) {
                return setHasFollow(true);
            } else {
                userProps?.user?.following.map((value) => {
                    const foundUser = value?.user?._id === mediaProps?.media?.user?._id;
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