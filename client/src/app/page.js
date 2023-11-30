"use client"

import {useCallback, useEffect, useRef, useState} from "react";

import {fakeUserData, fakePostListData} from "@/constants";
import {Header, Aside, Main, CreatePostDialog} from "@/components";

const HomePage = () => {
    const createPostRef = useRef(null);
    const [showCreatePost, setMainCreatePost] = useState(false);

    const handleShowCreatePost = useCallback(() => {
        setMainCreatePost((prevShowMainCreatePost) => !prevShowMainCreatePost);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (createPostRef.current && !createPostRef.current.contains(event.target)){
                setMainCreatePost(false);
            }
        }

        if (showCreatePost){
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showCreatePost]);

    return (
        <div>
            <Header navigationItem="home" userProps={fakeUserData}/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col relative">
                        <div className="min-w-[320px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                            <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                <Aside userProps={fakeUserData}/>
                                <div className="w-full h-full relative">
                                    <Main userProps={fakeUserData} postListData={fakePostListData} handleShowCreatePost={handleShowCreatePost}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {showCreatePost ? (
                    <CreatePostDialog userProps={fakeUserData} createPostRef={createPostRef} handleShowCreatePost={handleShowCreatePost}/>
                ) : null}
            </div>
        </div>
    );
};

export default HomePage;