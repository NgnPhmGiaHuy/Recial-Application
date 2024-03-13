"use client"

import { Header, Aside, Main, CreatePostDialog } from "@/components";
import { useGetPostData, useUserData, useWithAuth, useUserProfileActions } from "@/hooks";

const HomePage = () => {
    const { profileActionRef, showCreatePost } = useUserProfileActions();

    const { userProps } = useUserData();
    const { postRef, postProps, setPostProps } = useGetPostData();

    // const onDataReceived = async (data) => {
        // await handleNewPostData(data, postProps, setPostProps);
        // await handleNewUserData(data, userProps, setUserProps);
    // };

    // useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <>
            { userProps ? (
                <div>
                    <Header/>
                    <div className="flex flex-col relative z-0 ">
                        <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
                            <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col relative">
                                <div className="min-w-[320px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                    <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                        <Aside/>
                                        <Main postRef={postRef} postProps={postProps} setPostProps={setPostProps}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        { showCreatePost && <CreatePostDialog createPostRef={profileActionRef.createPostRef}/> }
                    </div>
                </div>
            ) : (
                <div className="w-screen h-screen py-[16px] flex items-center justify-center relative">
                    <div className="w-[120px] h-[120px] inline-block animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            ) }
        </>
    );
};

export default useWithAuth(HomePage);