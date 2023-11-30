import {Story, CreatePost, Post, FriendRequest, SuggestGroup, SuggestPage, Event} from "@/components";

const Main = ({userProps, postListData, handleShowCreatePost}) => {
    return (
        <div className="pl-[32px] flex flex-row flex-shrink flex-nowrap grow items-stretch justify-center relative">
            <div className="flex flex-col flex-shrink-0 grow relative">
                <div className="w-full mt-[16px] relative">
                    <div className="w-full flex flex-row items-start justify-center relative">
                        <div className="px-[16px] flex flex-col flex-shrink flex-grow-0">
                            <div>
                                <Story userProps={userProps}/>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="w-full">
                                    <div className="mb-[16px]">
                                        <CreatePost userProps={userProps} handleShowCreatePost={handleShowCreatePost} />
                                    </div>
                                    <div>
                                        <Post postListData={postListData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[320px] min-h-screen pl-[12px] py-[8px] flex flex-col flex-shrink-0 relative">
                            {userProps.friend_requests ? (
                                <div className="mb-[16px]">
                                    <FriendRequest friendRequestData={userProps.friend_requests}/>
                                </div>
                            ) : null}
                            {userProps.suggest_group ? (
                                <div className="mb-[16px]">
                                    <SuggestGroup userProps={userProps.suggest_group}/>
                                </div>
                            ) : null}
                            {userProps.suggest_pages ? (
                                <div className="mb-[16px]">
                                    <SuggestPage userProps={userProps.suggest_pages}/>
                                </div>
                            ) : null}
                            {userProps.event ? (
                                <div className="mb-[12px]">
                                    <Event userProps={userProps.event}/>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;