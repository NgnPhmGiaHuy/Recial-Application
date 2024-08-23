import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

import { useCountComment } from "@/hooks";
import { handleFormatNumber, handleReaction, handleSavedData } from "@/utils";
import { CodeBracketCircleIcon, MediaPageScaffoldHeaderReactionItem } from "@/components";

const MediaPageScaffoldHeaderReaction = () => {
    const userProps = useSelector(state => state.user, shallowEqual);
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const totalComment = useCountComment(mediaProps);

    const hasSaved = mediaProps?.saved?.includes(userProps?.user?._id);

    const hasReaction = mediaProps?.reaction?.includes(userProps?.user?._id);

    const handleSaved = () => {
        if (hasSaved) {
            return handleSavedData("video", mediaProps?._id, "DELETE");
        }
        return handleSavedData("video", mediaProps?._id);
    }

    const button = [
        {
            active: hasReaction,
            number: handleFormatNumber(mediaProps?.reaction?.length) || 0,
            iconPath: (
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            ),
            bgColor: "rgba(254,202,202,1)",
            fillColor: "#ef4444",
            onClick: () => handleReaction({ condition: hasReaction, destinationId: mediaProps?._id }),
        },
        {
            number: totalComment ? handleFormatNumber(totalComment) : 0,
            iconPath: (
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/>
            ),
        },
        {
            active: hasSaved,
            number: handleFormatNumber(mediaProps?.saved?.length) || 0,
            iconPath: (
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
            ),
            bgColor: "rgba(255,237,213,1)",
            fillColor: "#f97316",
            onClick: handleSaved,
        },
    ]

    return (
        <div>
            <div className="flex flex-row items-center justify-between relative">
                <div className="flex flex-row items-center">
                    { button.map((value, index) => (
                        <MediaPageScaffoldHeaderReactionItem key={index} active={value.active} number={value.number} iconPath={value.iconPath} bgColor={value.bgColor} fillColor={value.fillColor} onClick={value.onClick} />
                    )) }
                </div>
                <div className="flex flex-row items-center">
                    <Link href="">
                        <div className="w-[24px] h-[24px] mr-[8px] flex items-center justify-center rounded-full overflow-hidden relative">
                            <CodeBracketCircleIcon fill="none" stroke="white" strokeWidth={0} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MediaPageScaffoldHeaderReaction;