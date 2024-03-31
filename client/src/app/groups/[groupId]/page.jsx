"use client"

import { useGetGroupData, useUserData, useUserProfileActions, useWithAuth } from "@/hooks";
import { CreatePostDialog, GroupPage, Header, LoadingPageComponent } from "@/components";

const GroupScaffoldPage = ({ params }) => {
    useGetGroupData(params.groupId);

    const { userProps } = useUserData();
    const { profileActionRef, showCreatePost } = useUserProfileActions();

    return (
        <>
            { userProps ? (
                <>
                    <div>
                        <Header/>
                        <div className="flex flex-col relative">
                            <GroupPage/>
                        </div>
                    </div>
                    <div>
                        { showCreatePost && (
                            <CreatePostDialog createPostRef={profileActionRef.createPostRef}/>
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