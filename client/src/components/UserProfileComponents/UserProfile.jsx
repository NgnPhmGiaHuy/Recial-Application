import { CreatePost, Post, UserProfileAbout, UserProfileCover } from "@/components";

const UserProfile = ({ userData, userProps, userCheck, postProps, postByIdRef, handleState }) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} handleState={handleState} userCheck={userCheck} />
                </div>
                {userCheck.isCurrentUser ? (
                    <div>
                        <CreatePost userProps={userProps} handleShowCreatePost={handleState.handleShowCreatePost}/>
                    </div>
                ) : null}
                {userProps && userProps?.user?.description ? (
                    <div>
                        <UserProfileAbout userProps={userProps}/>
                    </div>
                ) : null}
                {postProps ? (
                    <div>
                        <Post postRef={postByIdRef} userData={userData} userProps={userProps} isCurrentUser={userCheck.isCurrentUser} postListProps={postProps}/>
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default UserProfile;