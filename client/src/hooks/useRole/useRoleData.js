import useSWR from "swr";

import fetcherWithAccessToken from "@/app/api/fetcherWithAccessToken";

const useRoleData = async (roleId) => {
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/role/${roleId}`, fetcherWithAccessToken);

    return { data, error, isLoading, isValidating };
}

export default useRoleData;
