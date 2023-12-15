"use client"

import { useCallback, useRef, useState } from "react";

import { Header, Aside, Main, CreatePostDialog } from "@/components";
import { useClickOutside, usePostData, useTokenRefresh, useUserData, withAuth } from "@/hooks";

const HomePage = () => {
    const createPostRef = useRef(null);

    const [showCreatePost, setMainCreatePost] = useState(false);

    const handleShowCreatePost = useCallback(() => {
        setMainCreatePost((prevShowMainCreatePost) => !prevShowMainCreatePost);
    }, []);

    const userProps = useUserData();
    const { postProps, postRef } = usePostData();

    useTokenRefresh();
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
                                        <Main postRef={postRef} userProps={userProps}postListProps={postProps} handleShowCreatePost={handleShowCreatePost}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {showCreatePost ? (
                            <CreatePostDialog userProps={userProps} createPostRef={createPostRef} handleShowCreatePost={handleShowCreatePost}/>
                        ) : null}
                    </div>
                </div>
            </> : null
    );
};

export default withAuth(HomePage);