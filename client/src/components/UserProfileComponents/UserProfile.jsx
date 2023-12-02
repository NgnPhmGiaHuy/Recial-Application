import {Post, UserProfileAbout, UserProfileCover} from "@/components";

const UserProfile = ({userProps, postProps}) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} navigationProps="post"/>
                </div>
                <div>
                    <UserProfileAbout userProps={userProps}/>
                </div>
                <div>
                    <Post postListProps={postProps}/>
                </div>
            </div>
        </main>
    );
};

export default UserProfile;