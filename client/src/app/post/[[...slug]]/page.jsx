"use client"

import {MediaPageScaffold} from "@/components";
import {useMediaData, useTokenRefresh} from "@/hooks";

const PostPage = ({searchParams}) => {
    useTokenRefresh();

    const url = process.env.NEXT_PUBLIC_API_URL + "/api/media/post/?" + new URLSearchParams(searchParams).toString();

    const mediaProps = useMediaData(url);

    return (
        <div className="relative">
            <MediaPageScaffold mediaProps={mediaProps}/>
        </div>
    );
};

export default PostPage;