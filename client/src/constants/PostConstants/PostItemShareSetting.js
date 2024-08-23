import { ArrowUturnRightIcon, ChatBubbleLeftIcon, PencilSquareIcon, UserGroupIcon } from "@/components";

const POST_ITEM_SHARE_SETTING = [
    {
        break: false,
        icon: <ArrowUturnRightIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />,
        title: "Share now (Only me)",
        switchButton: false,
    }, {
        break: false,
        icon: <PencilSquareIcon width={20} height={20} />,
        title: "Share to Feed",
        switchButton: false,
    }, {
        break: false,
        icon: <ChatBubbleLeftIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />,
        title: "Send to Message",
        switchButton: false,
    }, {
        break: false,
        icon: <UserGroupIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />,
        title: "Share to a group",
        switchButton: false,
    },
]

export default POST_ITEM_SHARE_SETTING;
