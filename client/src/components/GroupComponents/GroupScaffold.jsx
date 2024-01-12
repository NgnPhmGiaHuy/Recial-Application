import React from 'react';
import {
    GroupScaffoldContent,
    GroupScaffoldContentBlock,
    GroupScaffoldHeader,
    GroupScaffoldNavigation
} from "@/components";

const GroupScaffold = ({ postRef, userProps, userRole, groupData, handleState }) => {
    return (
        <div className="min-h-[calc(100vh-56px)] mb-[calc(-100vh+56px)] top-[56px] flex flex-col relative">
            <div className="min-h-full flex flex-col grow relative">
                <div className="max-w-full min-w-[cacl(100%-360px) min-h-[inherit] w-[cacl(100%-360px) flex flex-shrink-0 grow relative">
                    <div className="min-h-[inherit] flex flex-col grow relative">
                        <div>
                            <GroupScaffoldHeader groupData={groupData} userRole={userRole}/>
                        </div>
                        <GroupScaffoldNavigation groupData={groupData} userRole={userRole}/>
                        {(groupData?.groupProps?.group_privacy === "Public" || userRole.length) ? (
                            <GroupScaffoldContent postRef={postRef} userProps={userProps} groupData={groupData} handleState={handleState}/>
                        ) : (
                            <GroupScaffoldContentBlock groupData={groupData}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupScaffold;