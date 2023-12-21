"use client"

import {MediaPageScaffold} from "@/components";
import {useMediaData, useUserData} from "@/hooks";

const PostPage = ({searchParams}) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/media/post/?" + new URLSearchParams(searchParams).toString();

    const userProps = useUserData();
    const mediaProps = useMediaData(url);

    return (
        <div className="relative">
            <MediaPageScaffold mediaProps={mediaProps}/>
        </div>
    );
};

export default PostPage;