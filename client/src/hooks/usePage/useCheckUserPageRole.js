"use client"

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useDecodeToken } from "@/hooks";
import { clearPageCurrentUserRole, setPageCurrentUserRole } from "@/store/actions/page/pageActions";

const useCheckUserPageRole = (pageIds) => {
    const decodedToken = useDecodeToken();
    const dispatch = useDispatch();

    const [userRole, setUserRole] = useState(null);

    const checkUserRole = () => {
        if (decodedToken?.roles?.page) {
            Object.entries(decodedToken.roles.page).forEach(([pageId, userRole]) => {
                if (pageId === pageIds) {
                    setUserRole(userRole);

                    return dispatch(setPageCurrentUserRole(userRole));
                }
            });
        }
    };

    useEffect(() => {
        dispatch(clearPageCurrentUserRole());

        return checkUserRole();
    }, [pageIds, decodedToken]);

    return { userRole };
}

export default useCheckUserPageRole;