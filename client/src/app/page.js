"use client"

import {useCallback, useRef, useState} from "react";

import { Header, Aside, Main, CreatePostDialog } from "@/components";
import { useClickOutside, useStoryData, useGetPostData, useTokenRefresh, useUserData, useWithAuth } from "@/hooks";

const HomePage = () => {
    useTokenRefresh();

    const createPostRef = useRef(null);

    const [showCreatePost, setMainCreatePost] = useState(false);

    const handleShowCreatePost = useCallback(() => {
        setMainCreatePost((prevShowMainCreatePost) => !prevShowMainCreatePost);
    }, []);

    const storyProps = useStoryData();
    const { userProps, setUserProps } = useUserData();
    const { postRef, postProps, setPostProps } = useGetPostData();

    useClickOutside(createPostRef, showCreatePost, setMainCreatePost);

    return (
        userProps ?
            <>
                <div>
                    <Header navigationProps="home" userProps={userProps}/>
                    <div className="flex flex-col relative z-0 ">
                        <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
                            <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col relative">
                                <div className="min-w-[320px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                    <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                        <Aside userProps={userProps}/>
                                        <Main postRef={postRef} storyProps={storyProps} userProps={userProps} postProps={postProps} setPostProps={setPostProps} handleShowCreatePost={handleShowCreatePost}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {showCreatePost ? (
                            <CreatePostDialog userProps={userProps} setUserProps={setUserProps} setPostProps={setPostProps} createPostRef={createPostRef} handleShowCreatePost={handleShowCreatePost}/>
                        ) : null}
                    </div>
                </div>
            </> : null
    );
};

export default useWithAuth(HomePage);