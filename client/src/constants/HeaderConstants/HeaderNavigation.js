import HomeIcon from "@/components/IconComponents/HomeIcon";
import WatchIcon from "@/components/IconComponents/WatchIcon";
import ArticleIcon from "@/components/IconComponents/ArticleIcon";
import NetworkIcon from "@/components/IconComponents/NetworkIcon";

const HEADER_NAVIGATION = [
    {
        link: "/",
        title: "Home",
        icon: <HomeIcon/>,
    },
    {
        link: "/friends",
        title: "My Network",
        icon: <NetworkIcon/>,
    },
    {
        link: "/watch",
        title: "Videos",
        icon: <WatchIcon/>,
    },
    {
        link: "",
        title: "Articles",
        icon: <ArticleIcon/>,
    },
];

export default HEADER_NAVIGATION;