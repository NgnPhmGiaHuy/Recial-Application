"use client"

import React, {useRef} from 'react';

import {CreatePostDialog, GroupScaffold, Header} from "@/components";
import {useGroupData, useToggleState, useUserData, useWithAuth} from "@/hooks";

const GroupPage = ({ params }) => {
    const groupId = params.groupId;

    const createPostRef = useRef();

    const [showCreatePost, setMainCreatePost, handleShowCreatePost] = useToggleState(false);

    const { userProps, setUserProps } = useUserData();
    const { postRef, groupData, setGroupData, userRole } = useGroupData(groupId, userProps?.user?._id);

    const handleState = {
        handleShowCreatePost: handleShowCreatePost,
    };

    return (
        userProps &&
            <>
                <div>
                    <Header userProps={userProps}/>
                    <div className="flex flex-col relative">
                        <GroupScaffold postRef={postRef} userProps={userProps} userRole={userRole} groupData={groupData} handleState={handleState}/>
                    </div>
                </div>
                <div>
                    {showCreatePost && (
                        <CreatePostDialog userProps={userProps} setUserProps={setUserProps} createPostRef={createPostRef} handleShowCreatePost={handleShowCreatePost}/>
                    )}
                </div>
            </>
    );
};

export default useWithAuth(GroupPage);