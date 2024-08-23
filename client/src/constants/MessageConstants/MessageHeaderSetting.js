import { ArchiveBoxIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, ExclamationTriangleIcon, NoSymbolIcon, PhoneArrowDownLeftIcon, RectangleStackIcon, SpeakerWaveIcon } from "@/components";

const MESSAGE_HEADER_SETTING = [
    {
        break: true,
    }, {
        break: false,
        icon: <PhoneArrowDownLeftIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Incoming call sounds",
        switchButton: true,
    }, {
        break: false,
        icon: <SpeakerWaveIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Message sounds",
        switchButton: true,
    }, {
        break: false,
        icon: <RectangleStackIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Pop-up new messages",
        switchButton: true,
    }, {
        break: true,
    }, {
        break: false,
        icon: <ChatBubbleLeftRightIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Message requests",
        switchButton: false,
    }, {
        break: false,
        icon: <ArchiveBoxIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Archived chats",
        switchButton: false,
    }, {
        break: false,
        icon: <ChatBubbleLeftEllipsisIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Message delivery settings",
        switchButton: false,
    }, {
        break: true,
    }, {
        break: false,
        icon: <ExclamationTriangleIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Restricted accounts",
        switchButton: false,
    }, {
        break: false,
        icon: <NoSymbolIcon fill="none" stroke="currentColor" width={20} height={20}/>,
        title: "Block setting",
        switchButton: false,
    },
];

export default MESSAGE_HEADER_SETTING;