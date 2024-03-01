import { GroupPageContent, GroupPageContentBlock, GroupPageHeader, GroupPageNavigation } from "@/components";

const GroupPage = ({ postRef, userProps, userRole, groupData, handleState }) => {
    return (
        <div className="min-h-[calc(100vh-56px)] mb-[calc(-100vh+56px)] top-[56px] flex flex-col relative">
            <div className="min-h-full flex flex-col grow relative">
                <div className="max-w-full min-w-[cacl(100%-360px)] min-h-[inherit] w-[cacl(100%-360px) flex flex-shrink-0 grow relative">
                    <div className="min-h-[inherit] flex flex-col grow relative">
                        <div>
                            <GroupPageHeader groupData={groupData} userRole={userRole}/>
                        </div>
                        <GroupPageNavigation groupData={groupData} userRole={userRole}/>
                        {(groupData?.groupProps?.group_privacy === "Public" || userRole.length) ? (
                            <GroupPageContent postRef={postRef} userProps={userProps} groupData={groupData} handleState={handleState}/>
                        ) : (
                            <GroupPageContentBlock groupData={groupData}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPage;