import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

import { useCountComment } from "@/hooks";
import { MediaPageScaffoldHeaderReactionItem } from "@/components";
import { handleFormatNumber, handleReaction, handleSavedData } from "@/utils";

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
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="white" className="w-6 h-6">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#161823" fillOpacity="0.75"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.313 7.96568C12.3665 7.65966 12.658 7.45498 12.964 7.50851C13.27 7.56203 13.4747 7.8535 13.4211 8.15951L12.0506 15.9952C11.997 16.3012 11.7056 16.5059 11.3996 16.4523C11.0936 16.3988 10.8889 16.1073 10.9424 15.8013L12.313 7.96568ZM16.2402 8.77448C15.96 8.48453 15.5058 8.48453 15.2256 8.77448C14.9454 9.06443 14.9454 9.53454 15.2256 9.82449L17.454 12.1307L15.2262 14.4364C14.946 14.7263 14.946 15.1964 15.2262 15.4864C15.5063 15.7763 15.9606 15.7763 16.2407 15.4864L19.4551 12.1598C19.4704 12.1439 19.4704 12.1182 19.4551 12.1023L19.2233 11.8623L19.2201 11.8586L19.2158 11.854L16.2402 8.77448ZM8.88972 15.4867C8.59977 15.7766 8.12966 15.7766 7.83971 15.4867L5.4207 13.0677L4.76017 12.4071L4.51191 12.1589C4.49603 12.143 4.49603 12.1173 4.51191 12.1014L7.83853 8.77477C8.12848 8.48482 8.59859 8.48482 8.88854 8.77477C9.17849 9.06472 9.17849 9.53482 8.88854 9.82478L6.58318 12.1301L8.88972 14.4367C9.17967 14.7266 9.17967 15.1967 8.88972 15.4867Z" fill="white"></path>
                                </svg>
                            </i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MediaPageScaffoldHeaderReaction;