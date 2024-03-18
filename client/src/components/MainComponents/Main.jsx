"use client"

import { useSelector } from "react-redux";

import { useGetUserFriendRequestData } from "@/hooks/useUser/useUserData";
import { useSuggestEventData, useSuggestGroupData, useSuggestPageData } from "@/hooks";
import { Story, CreatePost, Post, FriendRequest, SuggestGroup, SuggestPage, SuggestEvent } from "@/components";

const Main = ({ postRef, userData, postProps, setPostProps }) => {
    const userProps = useSelector(state => state.user);

    const { isLoading } = useGetUserFriendRequestData();

    const { suggestPageProps } = useSuggestPageData();
    const { suggestEventProps } = useSuggestEventData();
    const { suggestGroupProps } = useSuggestGroupData();

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
                                        <Post postRef={postRef} userData={userData} userProps={userProps} postListProps={postProps} setPostListProps={setPostProps}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[320px] min-h-screen px-[12px] py-[8px] sm:flex hidden flex-col gap-[16px] flex-shrink-0 relative">
                            {isLoading ? (
                                    <div className="w-full h-full py-[16px] flex items-center justify-center relative">
                                        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                            ) : (
                                (userProps?.friend_request && userProps.friend_request?.length) && <FriendRequest/>
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