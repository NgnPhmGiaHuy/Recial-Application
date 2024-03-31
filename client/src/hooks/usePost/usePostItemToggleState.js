import { useToggleState } from "@/hooks";

const usePostItemToggleState = (ref) => {
    const [deletePostStatus, setDeletePostStatus, handleDeletePostStatus] = useToggleState(false);
    const [showPostItemDelete, setShowPostItemDelete, handleShowPostItemDelete] = useToggleState(false);
    const [showPostItemComment, setShowPostItemComment, handleShowPostItemComment] = useToggleState(false);
    const [showPostReactionButton, setShowPostReactionButton, handleShowPostReactionButton] = useToggleState(false);
    const [showPostItemShareSetting, setShowPostItemShareSetting, handleShowPostShareSetting] = useToggleState(false);
    const [showPostItemQuickSetting, setShowPostItemQuickSetting, handleShowPostItemQuickSetting] = useToggleState(false);

    const state = {
        deletePostStatus: deletePostStatus,
        showPostItemDelete: showPostItemDelete,
        showPostItemComment: showPostItemComment,
        showPostReactionButton: showPostReactionButton,
        showPostItemShareSetting: showPostItemShareSetting,
        showPostItemQuickSetting: showPostItemQuickSetting,
    };

    const setState = {
        setDeletePostStatus: setDeletePostStatus,
        setShowPostItemDelete: setShowPostItemDelete,
        setShowPostItemComment: setShowPostItemComment,
        setShowPostReactionButton: setShowPostReactionButton,
        setShowPostItemShareSetting: setShowPostItemShareSetting,
        setShowPostItemQuickSetting: setShowPostItemQuickSetting,
    }

    const handleState = {
        handleMouseEnter: async () => {
            clearTimeout(ref.timeoutRef.current);
            ref.timeoutRef.current = setTimeout(() => {
                setShowPostReactionButton(true);
            }, 0);
        },
        handleMouseLeave: async () => {
            ref.timeoutRef.current = setTimeout(() => {
                setShowPostReactionButton(false);
            }, 750);
        },
        handleDeletePostStatus: handleDeletePostStatus,
        handleShowPostItemDelete: handleShowPostItemDelete,
        handleShowPostItemComment: handleShowPostItemComment,
        handleShowPostShareSetting: handleShowPostShareSetting,
        handleShowPostReactionButton: handleShowPostReactionButton,
        handleShowPostItemQuickSetting: handleShowPostItemQuickSetting,
    }

    return { state, setState, handleState };
}

export default usePostItemToggleState;