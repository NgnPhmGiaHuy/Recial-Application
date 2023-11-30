import {Post, UserProfileAbout, UserProfileCover} from "@/components";

const UserProfile = ({userProps, postProps}) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} navigationItem="post"/>
                </div>
                <div>
                    <UserProfileAbout userProps={userProps}/>
                </div>
                <div>
                    <Post postListData={postProps}/>
                </div>
            </div>
        </main>
    );
};

export default UserProfile;