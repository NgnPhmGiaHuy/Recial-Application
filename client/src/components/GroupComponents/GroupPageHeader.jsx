import { GroupPageHeaderContent, GroupPageHeaderCover } from "@/components";

const GroupPageHeader = ({ userRole, groupData }) => {
    return (
        <>
            <GroupPageHeaderCover groupProps={groupData.groupProps}/>
            <GroupPageHeaderContent userRole={userRole} groupProps={groupData.groupProps} groupMemberProps={groupData.groupMemberProps} />
        </>
    );
};

export default GroupPageHeader;