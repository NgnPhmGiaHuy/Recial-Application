import CogIcon from "@/components/IconComponents/CogIcon";
import MoonIcon from "@/components/IconComponents/MoonIcon";
import QuestionMarkCircleIcon from "@/components/IconComponents/QuestionMarkCircleIcon";
import ChatBubbleBottomCenterTextIcon from "@/components/IconComponents/ChatBubbleBottomCenterTextIcon";

const HEADER_PERSONAL_ACCOUNT = [
    {
        icon: <CogIcon fill="none" stroke="currentColor" />,
        title: "Settings & privacy",
        linkPath: "/settings/categories/account",
        showChevron: true,
    }, {
        icon: <QuestionMarkCircleIcon fill="none" stroke="currentColor" />,
        title: "Help & support",
        linkPath: "",
        showChevron: true,
    }, {
        icon: <MoonIcon fill="none" stroke="currentColor" />,
        title: "Display & accessibility",
        linkPath: "/settings/categories/profile-visibility",
        showChevron: true,
    }, {
        icon: <ChatBubbleBottomCenterTextIcon fill="none" stroke="currentColor" />,
        title: "Give feedback",
        linkPath: "",
        showChevron: false,
    },
];

export default HEADER_PERSONAL_ACCOUNT;