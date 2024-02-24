"use client"

import { useState, useEffect } from "react";

import Like from "/public/images/Icon/like.png";
import Dislike from "/public/images/Icon/dislike.png";
import Happiness from "/public/images/Icon/happiness.png";
import Unhappiness from "/public/images/Icon/sad.png";

const useMostReactedIcons = (reactionProps) => {
    const [mostReactedIcons, setMostReactedIcons] = useState([Like, Like]);

    useEffect(() => {
        const reactionCounts = {};

        reactionProps?.forEach(reaction => {
            const { reaction_type } = reaction;
            if (reactionCounts[reaction_type]) {
                return reactionCounts[reaction_type]++;
            } else {
                return reactionCounts[reaction_type] = 1;
            }
        });

        const reactions = Object.entries(reactionCounts).map(([type, count]) => {
            let icon;
            switch (type) {
                case "Happiness":
                    icon = Happiness;
                    break;
                case "Like":
                    icon = Like;
                    break;
                case "Unhappiness":
                    icon = Unhappiness;
                    break;
                case "Dislike":
                    icon = Dislike;
                    break;
                default:
                    break;
            }
            return { icon, count };
        });

        const sortedReactions = reactions.sort((a, b) => b.count - a.count);

        const topTwoReactions = sortedReactions.slice(0, 2).map(reaction => reaction.icon);

        return setMostReactedIcons(topTwoReactions);
    }, [reactionProps]);

    return mostReactedIcons;
};

export default useMostReactedIcons;
