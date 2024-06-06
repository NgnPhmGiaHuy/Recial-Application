"use client"

import { shallowEqual, useSelector } from "react-redux";

import { MediaPhotoPageScaffoldItem, MediaPageScaffoldAside, VideoPageScaffoldItem } from "@/components";

const MediaPageScaffold = ({ progress }) => {
    const mediaProps = useSelector(state => state.media, shallowEqual);

    return (
        <div className="top-0 right-0 bottom-0 left-0 flex flex-row fixed bg-white">
            <div className="max-w-full flex-[1_0_600px] bg-black/95 overflow-hidden relative">
                { mediaProps?.media_type?.toLowerCase() === "photo" && (
                    <MediaPhotoPageScaffoldItem/>
                ) }
                { mediaProps?.media_type?.toLowerCase() === "video" && (
                    <VideoPageScaffoldItem progress={progress}/>
                ) }
            </div>
            <MediaPageScaffoldAside/>
        </div>
    );
};

export default MediaPageScaffold;