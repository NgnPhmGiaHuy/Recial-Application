import {Story, CreatePost, Post, FriendRequest, SuggestGroup, SuggestPage, Event} from "@/components";

const Main = ({userData, postListData, handleShowCreatePost}) => {
    return (
        <div className="pl-[32px] flex flex-row flex-shrink flex-nowrap grow items-stretch justify-center relative">
            <div className="flex flex-col flex-shrink-0 grow relative">
                <div className="w-full mt-[16px] relative">
                    <div className="w-full flex flex-row items-start justify-center relative">
                        <div className="px-[16px] flex flex-col flex-shrink flex-grow-0">
                            <div>
                                <Story userData={userData}/>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="w-full">
                                    <div className="mb-[16px]">
                                        <CreatePost userData={userData} handleShowCreatePost={handleShowCreatePost} />
                                    </div>
                                    <div>
                                        <Post postListData={postListData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[320px] min-h-screen pl-[12px] py-[8px] flex flex-col flex-shrink-0 relative">
                            {userData.friend_requests ? (
                                <div className="mb-[16px]">
                                    <FriendRequest friendRequestData={userData.friend_requests}/>
                                </div>
                            ) : ""}
                            {userData.suggest_group ? (
                                <div className="mb-[16px]">
                                    <SuggestGroup userData={userData.suggest_group}/>
                                </div>
                            ) : ""}
                            {userData.suggest_pages ? (
                                <div className="mb-[16px]">
                                    <SuggestPage userData={userData.suggest_pages}/>
                                </div>
                            ) : ""}
                            {userData.event ? (
                                <div className="mb-[12px]">
                                    <Event userData={userData.event}/>
                                </div>
                            ) : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;