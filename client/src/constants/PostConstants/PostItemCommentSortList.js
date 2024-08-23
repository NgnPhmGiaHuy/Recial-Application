import { ClockIcon, RocketLaunchIcon } from "@/components";

const POST_ITEM_COMMENT_SORT_LIST = [
    {
        break: false,
        icon: <RocketLaunchIcon fill="none" stroke="currentColor" width={24} height={24} />,
        title: "Most relevant",
        settingItemSubtitle: "See the most relevant comments",
        switchButton: false,
    }, {
        break: false,
        icon: <ClockIcon fill="none" stroke="currentColor" width={24} height={24} />,
        title: "Most recent",
        settingItemSubtitle: "See all comments, the most recent comments are first",
        switchButton: false,
    },
]

export default POST_ITEM_COMMENT_SORT_LIST;