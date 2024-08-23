import Group from "/public/images/Icon/group.png";
import Feeds from "/public/images/Icon/feeds.png";
import Pages from "/public/images/Icon/pages.png";
import Calender from "/public/images/Icon/calendar.png";
import Networking from "/public/images/Icon/networking.png";

const HEADER_MENU_SOCIAL = [
    {
        link: "",
        icon: Calender,
        title: "Events",
    }, {
        link: "/friends",
        icon: Networking,
        title: "Find friends",
    }, {
        link: "/groups/feed",
        icon: Group,
        title: "Groups",
    }, {
        link: "",
        icon: Feeds,
        title: "Feeds",
    }, {
        link: "",
        icon: Pages,
        title: "Pages",
    }
];

export default HEADER_MENU_SOCIAL;