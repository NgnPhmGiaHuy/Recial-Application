import { MapPinIcon, MusicalNoteIcon, PhotoIcon, VideoCameraIcon } from "@/components";

export const createPostOptionItemListConstants = (handleShowCreatePost) => {
    const item = [
        {
            icon: <MapPinIcon fill="none" stroke="currentColor" width={20} height={20} />,
            onclick: ""
        }, {
            icon: <MusicalNoteIcon fill="none" stroke="currentColor" width={20} height={20} />,
            onclick: ""
        }, {
            icon: <VideoCameraIcon fill="none" stroke="currentColor" width={20} height={20} />,
            onclick: ""
        }, {
            icon: <PhotoIcon fill="none" stroke="currentColor" width={20} height={20} />,
            onclick: handleShowCreatePost,
        },
    ]

    return item;
}
