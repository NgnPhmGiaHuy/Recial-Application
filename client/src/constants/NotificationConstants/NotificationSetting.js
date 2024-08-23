import { CogIcon, EnvelopeOpenIcon, TickIcon } from "@/components";

const HEADER_NOTIFICATION_SETTING = [
    {
        break: false,
        icon: <TickIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Mark all as read",
        switchButton: false,
    }, {
        break: false,
        icon: <CogIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Notification settings",
        switchButton: false,
    }, {
        break: false,
        icon: <EnvelopeOpenIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Open notification",
        switchButton: false,
    },
];

export default HEADER_NOTIFICATION_SETTING;