"use client"

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useDecodeToken } from "@/hooks";
import { clearGroupCurrentUserRole, setGroupCurrentUserRole } from "@/store/actions/group/groupActions";

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

export default useCheckUserGroupRole;