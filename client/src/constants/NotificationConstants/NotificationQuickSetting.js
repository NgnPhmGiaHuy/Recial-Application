import { EnvelopeOpenIcon, QuoteIcon, TrashIcon } from "@/components";

const HEADER_NOTIFICATION_QUICK_SETTING = [
    {
        break: false,
        icon: <EnvelopeOpenIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Mark as read",
        switchButton: false,
    }, {
        break: false,
        icon: <TrashIcon fill="none" stroke="currentColor" width={20} height={20} />,
        title: "Remove this notification",
        switchButton: false,
    }, {
        break: false,
        icon: <QuoteIcon width={20} height={20} />,
        title: "Report issue to Notifications Team",
        switchButton: false,
    },
]

export default HEADER_NOTIFICATION_QUICK_SETTING;