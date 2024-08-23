import { BellIcon, BookMarkIcon, ClockIcon, CodeBracketIcon, EyeSlashIcon, NoSymbolIcon, RectangleStackBlockIcon } from "@/components";

const POST_ITEM_QUICK_SETTING = (props) => {
    return [
        {
            break: false,
            icon: <BookMarkIcon fill="none" stroke="currentColor" width={20} height={20} />,
            title: "Save post",
            settingItemSubtitle: "Add this to your saved items.",
            switchButton: false,
        }, {
            break: true,
        },{
            break: false,
            icon: <BellIcon fill="none" stroke="currentColor" width={20} height={20} />,
            title: "Turn on notifications for this post",
            switchButton: false,
        }, {
            break: false,
            icon: <CodeBracketIcon fill="none" stroke="currentColor" width={20} height={20} />,
            title: "Embed",
            switchButton: false,
        }, {
            break: true,
        }, {
            break: false,
            icon: <EyeSlashIcon fill="none" stroke="currentColor" width={20} height={20} />,
            title: "Hide post",
            settingItemSubtitle: "See fewer posts like this.",
            switchButton: false,
        },{
            break: false,
            icon: <ClockIcon fill="none" stroke="currentColor" width={20} height={20} />,
            title: `Snooze ${props.postProps?.post?.user?.profile?.username || props.postProps?.post?.user?.profile?.firstname + " " + props.postProps?.post?.user?.profile?.lastname} for 30 days`,
            settingItemSubtitle: "Temporarily stop seeing posts.",
            switchButton: false,
        }, {
            break: false,
            icon: <RectangleStackBlockIcon fill="none" stroke="currentColor" width={20} height={20} />,
            title: "Unfollow this page",
            settingItemSubtitle: "Stop seeing posts from this Page",
            switchButton: false,
        }, {
            break: false,
            icon: <NoSymbolIcon fill="none" stroke="currentColor" width={20} height={20} />,
            title: `Block ${props.postProps?.post?.user?.profile?.username || props.postProps?.post?.user?.profile?.firstname + " " + props.postProps?.post?.user?.profile?.lastname}'s profile`,
            settingItemSubtitle: "You won't be able to see or contact each other.",
            switchButton: false,
        },
    ]
}

export default POST_ITEM_QUICK_SETTING;