import {Post, UserProfileAbout, UserProfileCover} from "@/components";

const UserProfile = ({userProps, postProps, postByIdRef, isCurrentUser}) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} navigationProps="post" isCurrentUser={isCurrentUser}/>
                </div>
                {userProps && userProps?.user?.description ? (
                    <div>
                        <UserProfileAbout userProps={userProps}/>
                    </div>
                ) : null}
                {postProps ? (
                    <div>
                        <Post postRef={postByIdRef} userProps={userProps} postListProps={postProps}/>
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default UserProfile;