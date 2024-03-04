import { CreatePost, Post, UserProfileAbout, UserProfileCover } from "@/components";

const UserProfile = ({ userData, userProps, userCheck, postProps, postByIdRef, handleState }) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} handleState={handleState} userCheck={userCheck} />
                </div>
                {userCheck.isCurrentUser && <CreatePost userProps={userProps} handleShowCreatePost={handleState.handleShowCreatePost}/>}
                {userProps && userProps?.user?.description && <UserProfileAbout userProps={userProps}/>}
                {postProps && <Post postRef={postByIdRef} userData={userData} userProps={userProps} isCurrentUser={userCheck.isCurrentUser} postListProps={postProps}/>}
            </div>
        </main>
    );
};

export default UserProfile;