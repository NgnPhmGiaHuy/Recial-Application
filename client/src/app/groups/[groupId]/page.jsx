"use client"

import { CreatePostDialog, GroupPage, Header } from "@/components";
import { useGroupData, useUserData, useUserProfileActions, useWithAuth } from "@/hooks";

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
                <div className="w-screen h-screen py-[16px] flex items-center justify-center relative">
                    <div className="w-[120px] h-[120px] inline-block animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            ) }
        </>
    );
};

export default useWithAuth(GroupScaffoldPage);