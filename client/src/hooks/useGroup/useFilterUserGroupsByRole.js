import { useDecodeToken } from "@/hooks";

const useFilterUserGroupsByRole = () => {
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

export default useFilterUserGroupsByRole;