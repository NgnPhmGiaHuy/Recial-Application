import { useSelector } from "react-redux";

import { useCountComment, useCountLikeReaction } from "@/hooks";

const useMediaReaction = () => {
    const mediaProps = useSelector(state => state.media);

    const totalLike = useCountLikeReaction(mediaProps?.media);
    const totalComment = useCountComment(mediaProps?.media);

    return { totalLike, totalComment };
}

export default useMediaReaction;