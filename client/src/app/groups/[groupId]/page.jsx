"use client"

import { useGroupData, useUserData, useUserProfileActions, useWithAuth } from "@/hooks";
import { CreatePostDialog, GroupPage, Header, LoadingPageComponent } from "@/components";

const GroupScaffoldPage = ({ params }) => {
    const { profileActionRef, showCreatePost } = useUserProfileActions();

    const { userProps } = useUserData();
    const { postRef, groupData } = useGroupData(params.groupId);

    return (
        <>
            { userProps ? (
                <>
                    <div>
                        <Header/>
                        <div className="flex flex-col relative">
                            <GroupPage postRef={postRef} groupData={groupData}/>
                        </div>
                    </div>
                    <div>
                        { showCreatePost && (
                            <CreatePostDialog groupProps={groupData} createPostRef={profileActionRef.createPostRef}/>
                        ) }
                    </div>
                </>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(GroupScaffoldPage);