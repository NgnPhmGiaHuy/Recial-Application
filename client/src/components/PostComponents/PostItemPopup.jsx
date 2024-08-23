import { shallowEqual, useSelector } from "react-redux";

import { PostItemComment, PostItemDelete, PostItemQuickSetting, PostItemReactionButton, PostItemShareSetting } from "@/components";

const PostItemPopup = ({ forwardRef, state, handleState, props, translateX, translateY }) => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    return (
        <div>
            <div ref={forwardRef.postQuickSettingButtonRef}>
                { (state.showPostItemQuickSetting && !isCurrentUser) && (
                    <PostItemQuickSetting props={props} postQuickSettingButtonRef={forwardRef.postQuickSettingButtonRef}
                                          translateX={translateX} translateY={translateY} />
                ) }
            </div>
            <div>
                { state.showPostItemDelete && isCurrentUser && (
                    <PostItemDelete props={props} postDeleteRef={forwardRef.postDeleteRef} handleState={handleState} />
                ) }
            </div>
            <div>
                <div>
                    { state.showPostReactionButton && (
                        <PostItemReactionButton props={props} timeoutRef={forwardRef.timeoutRef} postReactionButtonRef={forwardRef.postReactionButtonRef}
                                                handleState={handleState}
                                                translateX={translateX} translateY={translateY} />
                    ) }
                </div>
                <div>
                    { state.showPostItemComment && (
                        <PostItemComment commentRef={forwardRef.commentRef} props={props}/>
                    ) }
                </div>
                <div ref={forwardRef.postShareButtonRef}>
                    { state.showPostItemShareSetting && (
                        <PostItemShareSetting postShareButtonRef={forwardRef.postShareButtonRef}
                                              translateX={translateX} translateY={translateY} />
                    ) }
                </div>
            </div>
        </div>
    );
};

export default PostItemPopup;