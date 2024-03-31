import { useClickOutside, usePostItemAnimation, usePostItemToggleState, usePostItemMultipleRef } from "@/hooks";

const usePostItemData = () => {
    const ref = usePostItemMultipleRef();
    const { state, setState, handleState } = usePostItemToggleState(ref);
    const { translateX, translateY } = usePostItemAnimation(ref, state)

    useClickOutside(ref.postDeleteRef, state.showPostItemDelete, handleState.handleShowPostItemDelete);
    useClickOutside(ref.postShareButtonRef, state.showPostItemShareSetting, handleState.handleShowPostShareSetting);
    useClickOutside(ref.postReactionButtonRef, state.showPostReactionButton, handleState.handleShowPostReactionButton);
    useClickOutside(ref.postQuickSettingButtonRef, state.showPostItemQuickSetting, handleState.handleShowPostItemQuickSetting);

    return { ref, state, setState, handleState, translateX, translateY };
};

export default usePostItemData;