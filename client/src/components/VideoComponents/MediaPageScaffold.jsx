"use client"

import dynamic from "next/dynamic";
import { shallowEqual, useSelector } from "react-redux";

import { MediaPhotoPageScaffoldItem, MediaPageScaffoldAside } from "@/components";
const DynamicVideoPageScaffoldItem = dynamic(() => import("@/components/VideoComponents/VideoPageScaffoldItem"), { ssr: false });

const MediaPageScaffold = ({ videoProps }) => {
    const mediaProps = useSelector(state => state.media, shallowEqual);

    return (
        <div className="top-0 right-0 bottom-0 left-0 flex flex-row fixed bg-white">
            <div className="max-w-full flex-[1_0_600px] bg-black/95 overflow-hidden relative">
                { mediaProps?.media_type?.toLowerCase() === "photo" && (
                    <MediaPhotoPageScaffoldItem/>
                ) }
                {/*<DynamicVideoPageScaffoldItem videoProps={videoProps}/>*/}
            </div>
            <MediaPageScaffoldAside/>
        </div>
    );
};

export default MediaPageScaffold;