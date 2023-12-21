"use client"

import {MediaPageScaffold} from "@/components";
import {useMediaData, useUserData} from "@/hooks";

const StoryPage = ({searchParams}) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/media/story/?" + new URLSearchParams(searchParams).toString();

    const userProps = useUserData();
    const mediaProps = useMediaData(url);

    console.log(mediaProps)

    return (
        <div className="relative">
            <MediaPageScaffold mediaProps={mediaProps}/>
        </div>
    );
};

export default StoryPage;