"use client"

import { useSelector } from "react-redux";

import { setUserFriendRequestData } from "@/store/actions/user/userActions";
import { useGetUserDataFetcher, useSuggestEventData, useSuggestGroupData, useSuggestPageData } from "@/hooks";
import { Story, CreatePost, Post, FriendRequest, SuggestGroup, SuggestPage, SuggestEvent, LoadingComponent } from "@/components";

const Main = () => {
    const userProps = useSelector(state => state.user);
    const postProps = useSelector(state => state.post);

    const { suggestPageProps } = useSuggestPageData();
    const { suggestEventProps } = useSuggestEventData();
    const { suggestGroupProps } = useSuggestGroupData();

    const { isLoading } = useGetUserDataFetcher("friend-request", setUserFriendRequestData);

    return (
        <div className="sm:pl-[32px] pl-0 basis-[calc(100%-360px)] flex flex-row flex-shrink flex-nowrap grow items-stretch justify-center relative">
            <div className="max-w-full flex flex-col flex-shrink-0 relative">
                <div className="w-full mt-[16px] relative">
                    <div className="w-full flex flex-row items-start justify-center relative">
                        <div className="px-[16px] flex flex-col flex-shrink flex-grow-0">
                            <div>
                                <Story/>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="w-full">
                                    <div>
                                        <CreatePost/>
                                    </div>
                                    <div>
                                        <Post postRef={postProps?.post_list?.ref} postListProps={postProps?.post_list?.posts}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[320px] min-h-screen px-[12px] py-[8px] sm:flex hidden flex-col gap-[16px] flex-shrink-0 relative">
                            { isLoading ? (
                                <LoadingComponent/>
                            ) : (
                                userProps.friend_request?.length > 0 && <FriendRequest/>
                            ) }
                            { suggestPageProps && <SuggestPage pageProps={suggestPageProps}/> }
                            { suggestGroupProps && <SuggestGroup groupProps={suggestGroupProps}/> }
                            { suggestEventProps && <SuggestEvent eventProps={suggestEventProps}/> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;