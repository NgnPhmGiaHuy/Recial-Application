import { CompassIcon, CreditCardIcon, UserGroupIcon } from "@/components";

const ASIDE_GROUP = [
    {
        title: "Group feed",
        link: "/groups/feed",
        icon: (
            <CreditCardIcon width={32} height={32} />
        )
    },
    {
        title: "Discover",
        link: "/groups/discover",
        icon: (
            <CompassIcon fill="none" stroke="currentColor" width={32} height={32} />
        )
    },
    {
        title: "Your groups",
        link: "/groups/joins",
        icon: (
            <UserGroupIcon fill="none" stroke="currentColor" width={32} height={32} />
        )
    }
];

export default ASIDE_GROUP;