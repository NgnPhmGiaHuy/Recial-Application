import { shallowEqual, useSelector } from "react-redux";

import { UserAboutOverview, UserAboutScaffold, UserProfileCover } from "@/components";

const UserAbout = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover/>
                </div>
                <div>
                    <UserAboutOverview/>
                </div>
                { userProps?.photo_list && <UserAboutScaffold titleLabel="Photos" options={{ isPhotoCard: true }}/> }
                { userProps?.video_list && <UserAboutScaffold titleLabel="Videos" options={{ isVideoCard: true }} /> }
                { userProps?.user?.friends && <UserAboutScaffold titleLabel="Friends" options={{ isFriendCard: true }}/> }
                { userProps?.group_list && <UserAboutScaffold titleLabel="Groups" options={{ isGroupCard: true }} /> }
            </div>
        </main>
    );
};

export default UserAbout;