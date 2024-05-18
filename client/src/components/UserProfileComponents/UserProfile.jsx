import { shallowEqual, useSelector } from "react-redux";

import { CreatePost, Post, UserProfileAbout, UserProfileCover } from "@/components";

const UserProfile = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover/>
                </div>
                { userProps?.user?.contact?.description && <UserProfileAbout/> }
                { isCurrentUser && <CreatePost/> }
                { userProps.post_list && <Post postRef={userProps.post_list.ref} postListProps={userProps.post_list.posts}/> }
            </div>
        </main>
    );
};

export default UserProfile;