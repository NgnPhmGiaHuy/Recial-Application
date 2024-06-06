"use client"

import { useEffect, useState } from "react";

const useCountLikeReaction = (entity) => {
    const [totalLike, setTotalLike] = useState(0);

    const countLike = (like) => {
        let countLike = 0;

        like.map((like) => {
            if (like.reaction_type === "Like") {
                return countLike += 1;
            }
        })

        return countLike;
    };

    useEffect(() => {
        if (entity && entity.reaction) {
            const likeCount = countLike(entity.reaction);

            return setTotalLike(likeCount);
        }
    }, [entity.reaction]);

    return totalLike;
};

export default useCountLikeReaction;