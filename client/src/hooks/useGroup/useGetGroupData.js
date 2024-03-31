import { useCheckUserGroupRole, useGetGroupPostData, useGetGroupDataFetcher } from "@/hooks";
import { setGroupActivityData, setGroupData, setGroupMemberData } from "@/store/actions/group/groupActions";

const useGetGroupData = (groupId) => {
    useGetGroupPostData(groupId);
    useCheckUserGroupRole(groupId);

    useGetGroupDataFetcher(groupId, "profile", setGroupData);
    useGetGroupDataFetcher(groupId, "member", setGroupMemberData);
    useGetGroupDataFetcher(groupId, "activity", setGroupActivityData);
}

export default useGetGroupData;