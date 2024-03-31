import { useMultipleRefs } from "@/hooks";

const usePostItemMultipleRef = () => {
    return useMultipleRefs({
        postRef: null,
        headerRef: null,
        contentRef: null,
        footerRef: null,
        footerCommentRef: null,
        commentRef: null,
        timeoutRef: null,
        postDeleteRef: null,
        postShareButtonRef: null,
        postReactionButtonRef: null,
        postQuickSettingButtonRef: null
    });
}

export default usePostItemMultipleRef;