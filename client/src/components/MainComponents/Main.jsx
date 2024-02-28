"use client"

import { useSuggestEventData, useSuggestGroupData, useSuggestPageData } from "@/hooks";
import { Story, CreatePost, Post, FriendRequest, SuggestGroup, SuggestPage, SuggestEvent } from "@/components";

const Main = ({postRef, userData, userProps, storyProps, postProps, setPostProps, handleShowCreatePost}) => {
    const suggestPageProps = useSuggestPageData();
    const suggestGroupProps = useSuggestGroupData();
    const suggestEventProps = useSuggestEventData();

    return (
        <div className="sm:pl-[32px] pl-0 basis-[calc(100%-360px)] flex flex-row flex-shrink flex-nowrap grow items-stretch justify-center relative">
            <div className="max-w-full flex flex-col flex-shrink-0 relative">
                <div className="w-full mt-[16px] relative">
                    <div className="w-full flex flex-row items-start justify-center relative">
                        <div className="px-[16px] flex flex-col flex-shrink flex-grow-0">
                            <div>
                                <Story userProps={userProps} storyProps={storyProps}/>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="w-full">
                                    <div>
                                        <CreatePost userProps={userProps} handleShowCreatePost={handleShowCreatePost}/>
                                    </div>
                                    <div>
                                        <Post postRef={postRef} userData={userData} userProps={userProps} postListProps={postProps} setPostListProps={setPostProps}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[320px] min-h-screen px-[12px] py-[8px] sm:flex hidden flex-col gap-[16px] flex-shrink-0 relative">
                            {userProps?.friend_request && userProps.friend_request?.length ? (
                                <FriendRequest userProps={userProps?.friend_request}/>
                            ) : null}
                            { suggestGroupProps && <SuggestGroup groupProps={suggestGroupProps}/>}
                            { suggestPageProps && <SuggestPage pageProps={suggestPageProps}/> }
                            { suggestEventProps && <SuggestEvent eventProps={suggestEventProps}/> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;