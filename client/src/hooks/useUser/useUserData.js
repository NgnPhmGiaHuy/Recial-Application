"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getUserProfileData } from "@/utils";
import { setUserProfileData } from "@/store/actions/user/userActions";

const useUserData = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const userProps = useSelector(state  => state.user, shallowEqual);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userProfileData = await getUserProfileData();

                if (userProfileData && !userProfileData.error) {
                    dispatch(setUserProfileData(userProfileData));
                }
            } catch (error) {
                return console.error(error);
            }
        };

        fetchData();
    }, [router, dispatch]);

    return { userProps };
};

export default useUserData;