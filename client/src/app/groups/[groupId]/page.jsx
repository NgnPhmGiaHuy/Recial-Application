"use client"

import { useRef } from 'react';

import { CreatePostDialog, GroupPage, Header } from "@/components";
import { useGroupData, useToggleState, useUserData, useWithAuth } from "@/hooks";

const GroupScaffoldPage = ({ params }) => {
    const groupId = params.groupId;

    const createPostRef = useRef();

    const [showCreatePost, setMainCreatePost, handleShowCreatePost] = useToggleState(false);

    const { userProps, setUserProps } = useUserData();
    const { postRef, groupData, setGroupData, userRole } = useGroupData(groupId, userProps?.user?._id);

    const handleState = {
        handleShowCreatePost: handleShowCreatePost,
    };

    return (
        userProps && (
            <>
                <div>
                    <Header userProps={userProps}/>
                    <div className="flex flex-col relative">
                        <GroupPage postRef={postRef} userProps={userProps} userRole={userRole} groupData={groupData} handleState={handleState}/>
                    </div>
                </div>
                <div>
                    {showCreatePost && (
                        <CreatePostDialog userProps={userProps} setUserProps={setUserProps} groupProps={groupData} createPostRef={createPostRef} handleShowCreatePost={handleShowCreatePost}/>
                    )}
                </div>
            </>
        )
    );
};

export default useWithAuth(GroupScaffoldPage);