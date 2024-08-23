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
        showChevron: false,
    }, {
        link: "",
        icon: Memories,
        title: "Memories",
        showChevron: false,
    }, {
        link: "",
        icon: Article,
        title: "Articles",
        showChevron: false,
    }, {
        link: "/groups/feed/",
        icon: Group,
        title: "Groups",
        showChevron: false,
    }, {
        link: "/watch",
        icon: Video,
        title: "Videos",
        showChevron: false,
    }, {
        link: "/climatescienceinfo",
        icon: Climate,
        title: "Climate Science Center",
        showChevron: false,
    }, {
        link: "",
        icon: Feeds,
        title: "Feeds",
        showChevron: false,
    }, {
        link: "",
        icon: Saved,
        title: "Saved",
        showChevron: false,
    }, {
        link: "/event",
        icon: Calender,
        title: "Event",
        showChevron: false,
    }, {
        link: "/messages",
        icon: Message,
        title: "Message",
        showChevron: false,
    }, {
        link: "",
        icon: LiveVideo,
        title: "Live videos",
        showChevron: false,
    }, {
        link: "",
        icon: Pages,
        title: "Pages",
        showChevron: false,
    }, {
        link: "",
        icon: AdsManager,
        title: "Ads Manager",
        showChevron: false,
    },
];

export default ASIDE_LANDING;