import { CreatePost, Post, UserProfileAbout, UserProfileCover } from "@/components";

const UserProfile = ({ userData, userProps, postProps, postByIdRef, isFriend, isFriendRequest, isCurrentUser, handleShowCreatePost }) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} navigationProps="post" isFriend={isFriend} isFriendRequest={isFriendRequest} isCurrentUser={isCurrentUser}/>
                </div>
                {isCurrentUser ? (
                    <div>
                        <CreatePost userProps={userProps} handleShowCreatePost={handleShowCreatePost}/>
                    </div>
                ) : null}
                {userProps && userProps?.user?.description ? (
                    <div>
                        <UserProfileAbout userProps={userProps}/>
                    </div>
                ) : null}
                {postProps ? (
                    <div>
                        <Post postRef={postByIdRef} userData={userData} userProps={userProps} isCurrentUser={isCurrentUser} postListProps={postProps}/>
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default UserProfile;