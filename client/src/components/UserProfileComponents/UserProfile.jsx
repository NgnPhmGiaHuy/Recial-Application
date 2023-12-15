import {Post, UserProfileAbout, UserProfileCover} from "@/components";

const UserProfile = ({userProps, postProps, isCurrentUser}) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} navigationProps="post" isCurrentUser={isCurrentUser}/>
                </div>
                <div>
                    <UserProfileAbout userProps={userProps}/>
                </div>
                <div>
                    {/*<Post postListProps={postProps}/>*/}
                </div>
            </div>
        </main>
    );
};

export default UserProfile;