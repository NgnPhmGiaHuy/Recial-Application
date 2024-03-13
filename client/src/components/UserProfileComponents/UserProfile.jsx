import { useSelector } from "react-redux";

import { CreatePost, Post, UserProfileAbout, UserProfileCover } from "@/components";

const UserProfile = ({ postProps, postByIdRef }) => {
    const { isCurrentUser } = useSelector(state => state.userRelationship);

    const userProps = isCurrentUser ? useSelector(state => state.user) : useSelector(state => state.userId);

    return (
        <main>
            <div className="my-[16px] flex flex-col gap-4 relative">
                <div>
                    <UserProfileCover/>
                </div>
                { userProps?.user?.contact?.description && <UserProfileAbout/> }
                { isCurrentUser && <CreatePost/> }
                { postProps && <Post postRef={postByIdRef} postListProps={postProps}/> }
            </div>
        </main>
    );
};

export default UserProfile;