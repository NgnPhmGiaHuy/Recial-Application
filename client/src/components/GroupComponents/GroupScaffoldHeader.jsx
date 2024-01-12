import { GroupScaffoldHeaderContent, GroupScaffoldHeaderCover } from "@/components";

const GroupScaffoldHeader = ({ userRole, groupData }) => {
    return (
        <>
            <GroupScaffoldHeaderCover groupProps={groupData.groupProps}/>
            <GroupScaffoldHeaderContent userRole={userRole} groupProps={groupData.groupProps} groupMemberProps={groupData.groupMemberProps} />
        </>
    );
};

export default GroupScaffoldHeader;