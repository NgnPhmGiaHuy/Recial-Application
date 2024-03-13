import Group from "/public/images/Icon/group.png";
import Feeds from "/public/images/Icon/feeds.png";
import Pages from "/public/images/Icon/pages.png";
import Saved from "/public/images/Icon/saved.png";
import Video from "/public/images/Icon/video.png";
import Message from "/public/images/Icon/comments.png";
import Calender from "/public/images/Icon/calendar.png";
import Memories from "/public/images/Icon/memories.png";
import LiveVideo from "/public/images/Icon/live-video.png";
import AdsManager from "/public/images/Icon/bar-chart.png";
import Networking from "/public/images/Icon/networking.png";
import Climate from "/public/images/Icon/climate-change.png";
import Article from "/public/images/Icon/content-writing.png";
import RecentAdActivity from "/public/images/Icon/recent-ad-activity.png";

const ASIDE_LANDING = [
    {
        link: "/friends",
        icon: Networking,
        title: "Find friends",
        chevronRight: false,
    }, {
        link: "",
        icon: Memories,
        title: "Memories",
        chevronRight: false,
    }, {
        link: "",
        icon: Article,
        title: "Articles",
        chevronRight: false,
    }, {
        link: "/groups/feed/",
        icon: Group,
        title: "Groups",
        chevronRight: false,
    }, {
        link: "/watch",
        icon: Video,
        title: "Videos",
        chevronRight: false,
    }, {
        link: "",
        icon: Climate,
        title: "Climate Science Center",
        chevronRight: false,
    }, {
        link: "",
        icon: Feeds,
        title: "Feeds",
        chevronRight: false,
    }, {
        link: "",
        icon: Saved,
        title: "Saved",
        chevronRight: false,
    }, {
        link: "/event",
        icon: Calender,
        title: "Event",
        chevronRight: false,
    }, {
        link: "",
        icon: Message,
        title: "Message",
        chevronRight: false,
    }, {
        link: "",
        icon: LiveVideo,
        title: "Live videos",
        chevronRight: false,
    }, {
        link: "",
        icon: Pages,
        title: "Pages",
        chevronRight: false,
    }, {
        link: "",
        icon: AdsManager,
        title: "Ads Manager",
        chevronRight: false,
    },
];

export default ASIDE_LANDING;