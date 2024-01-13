import { GroupPageContentAside, GroupPageContentPost } from "@/components";

const GroupPageContent = ({ postRef, userProps, groupData, handleState }) => {
    return (
        <div className="flex flex-col grow relative">
            <div className="pb-[8px] w-full flex flex-col items-center relative">
                <div className="w-[1218px] px-[16px] pt-[16px] relative">
                    <div className="m-[-8px] flex flex-row flex-wrap-reverse items-stretch justify-center relative">
                        <GroupPageContentPost postRef={postRef} userProps={userProps} groupPostProps={groupData.groupPostProps} handleState={handleState}/>
                        <GroupPageContentAside groupProps={groupData.groupProps}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContent;