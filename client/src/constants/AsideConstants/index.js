import Group from "/public/images/Icon/group.png";
import Feeds from "/public/images/Icon/feeds.png";
import Pages from "/public/images/Icon/pages.png";
import Saved from "/public/images/Icon/saved.png";
import Video from "/public/images/Icon/video.png";
import Memories from "/public/images/Icon/memories.png";
import Calender from "/public/images/Icon/calendar.png";
import Message from "/public/images/Icon/comments.png";
import Networking from "/public/images/Icon/networking.png";
import LiveVideo from "/public/images/Icon/live-video.png";
import AdsManager from "/public/images/Icon/bar-chart.png";
import Article from "/public/images/Icon/content-writing.png";
import Climate from "/public/images/Icon/climate-change.png";
import RecentAdActivity from "/public/images/Icon/recent-ad-activity.png";

export const asideNavigationItemList = [
    {
        itemLink: "/friends",
        itemImage: Networking,
        itemTitle: "Find friends",
    }, {
        itemLink: "",
        itemImage: Memories,
        itemTitle: "Memories",
    }, {
        itemLink: "",
        itemImage: Article,
        itemTitle: "Articles",
    }, {
        itemLink: "",
        itemImage: Group,
        itemTitle: "Groups",
    }, {
        itemLink: "",
        itemImage: Video,
        itemTitle: "Videos",
    }, {
        itemLink: "",
        itemImage: Climate,
        itemTitle: "Climate Science Center",
    }, {
        itemLink: "",
        itemImage: Feeds,
        itemTitle: "Feeds",
    }, {
        itemLink: "",
        itemImage: Saved,
        itemTitle: "Saved",
    }, {
        itemLink: "",
        itemImage: Calender,
        itemTitle: "Event",
    }, {
        itemLink: "",
        itemImage: Message,
        itemTitle: "Message",
    }, {
        itemLink: "",
        itemImage: LiveVideo,
        itemTitle: "Live videos",
    }, {
        itemLink: "",
        itemImage: Pages,
        itemTitle: "Pages",
    }, {
        itemLink: "",
        itemImage: AdsManager,
        itemTitle: "Ads Manager",
    },
]

export const asideFriendItemList = [
    {
        itemLink: "/friends",
        itemImage: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        itemTitle: "Home",
        hasSettingItemChevronRight: false,
    },
    // {
    //     itemLink: "/friends/suggestions",
    //     itemImage: (
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    //              strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    //             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    //             <circle cx="12" cy="7" r="4"></circle>
    //         </svg>
    //     ),
    //     itemTitle: "Suggestions",
    //     hasSettingItemChevronRight: true,
    // },
    {
        itemLink: "/friends/requests",
        itemImage: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
        ),
        itemTitle: "Friend Requests",
        hasSettingItemChevronRight: true,
    },
    {
        itemLink: "/friends/list",
        itemImage: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
            </svg>
        ),
        itemTitle: "All Friends",
        hasSettingItemChevronRight: true,
    },
]

