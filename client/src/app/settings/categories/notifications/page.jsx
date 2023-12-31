import {fakeUserData} from "@/constants";
import {AsideSetting, Header, SettingScaffold} from "@/components";

const NotificationSettingPage = () => {
    const asideNotificationItemList = [
        {
            itemTitle: "Notifications you receive",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Connecting with others",
                    itemNavigation: "connecting_with_others",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Messaging",
                    itemNavigation: "messaging",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Pages",
                    itemNavigation: "pages",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Attending events",
                    itemNavigation: "attending_events",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "News and reports",
                    itemNavigation: "news_and_reports",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Updating your profile",
                    itemNavigation: "updating_your_profile",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Verifications",
                    itemNavigation: "verifications",
                    hasSettingItemChevronRight: false,
                },
            ]
        },
    ]

    return (
        <div>
            <Header userProps={fakeUserData}/>
            <div className="mt-[56px] mr-[24px] mb-[24px]">
                <div className="min-h-[calc(100vh-76px)] my-[24px] grid lg:grid-cols-[minmax(280px,3fr)_minmax(0,21fr)] grid-cols-[minmax(100px,3fr)_minmax(0,21fr)] grid-rows-[1fr_auto] gap-x-[2.4rem] gap-y-[2.4rem]">
                    <div>
                        <AsideSetting userProps={fakeUserData} navigationProps="notifications"/>
                    </div>
                    <main>
                        {asideNotificationItemList.map((value, index) => (
                            <SettingScaffold key={index} settingProps={value}/>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default NotificationSettingPage;