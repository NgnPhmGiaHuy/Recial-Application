import { useDispatch, useSelector } from "react-redux";

import { useClickOutside, useMultipleRefs } from "@/hooks";
import { toggleCreatePost, toggleEditProfile } from "@/store/actions/toggle/toggleActions";

const useUserProfileActions = () => {
    const dispatch = useDispatch();
    const { showCreatePost } = useSelector(state => state.toggle);
    const { showEditProfile } = useSelector(state => state.toggle);

    const profileActionRef = useMultipleRefs({ createPostRef: null, editProfileRef: null });

    useClickOutside(profileActionRef.createPostRef, showCreatePost, () => dispatch(toggleCreatePost()));
    useClickOutside(profileActionRef.editProfileRef, showEditProfile, () => dispatch(toggleEditProfile()));

    return { profileActionRef, showCreatePost, showEditProfile };
};

export default useUserProfileActions;
