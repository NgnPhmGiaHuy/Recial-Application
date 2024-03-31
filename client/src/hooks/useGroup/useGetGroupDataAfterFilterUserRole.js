"use client"

import useSWR from "swr";
import { useEffect, useState } from "react";

import fetcherWithoutAccessToken from "@/app/api/fetcherWithoutAccessToken";

const useGetGroupDataAfterFilterUserRole = (managedGroups, joinedGroups) => {
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

export default useGetGroupDataAfterFilterUserRole;