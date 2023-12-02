import {UserAboutOverview, UserAboutScaffold, UserProfileCover} from "@/components";

const UserAbout = ({userProps}) => {
    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover userProps={userProps} navigationProps="about"/>
                </div>
                <div>
                    <UserAboutOverview userProps={userProps}/>
                </div>
                <div>
                    <UserAboutScaffold userProps={userProps.photos_list} isPhoto={true}/>
                </div>
                <div>
                    <UserAboutScaffold userProps={userProps.videos_list} isVideo={true}/>
                </div>
                <div>
                    <UserAboutScaffold userProps={userProps.friends_list} isFriendItem={true}/>
                </div>
                <div>
                    <UserAboutScaffold userProps={userProps.groups_list} isGroup={true}/>
                </div>
            </div>
        </main>
    );
};

export default UserAbout;