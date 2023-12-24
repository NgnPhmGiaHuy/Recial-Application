import {fakeUserData} from "@/constants";
import {AsideSetting, Header, SettingScaffold} from "@/components";
import {useTokenRefresh} from "@/hooks";

const ProfileVisibilitySettingPage = () => {
    useTokenRefresh();

    const asideProfileVisibilityItemList = [
        {
            itemTitle: "Visibility of your profile & network",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Profile viewing options",
                    itemNavigation: "profile_viewing_options",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Edit your public profile",
                    itemNavigation: "edit_your_public_profile",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Connections",
                    itemNavigation: "connections",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Profile discovery using email address",
                    itemNavigation: "profile_discovery_using_email_address",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Profile discovery using phone number",
                    itemNavigation: "profile_discovery_using_phone_number",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Blocking",
                    itemNavigation: "blocking",
                    hasSettingItemChevronRight: false,
                },
            ]
        },
        {
            itemTitle: "Visibility of your Recial activity",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Manage active status",
                    itemNavigation: "manage_active_status",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Share profile updates with your network",
                    itemNavigation: "share_profile_updates_with_your_network",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Notify connections when you're in the news",
                    itemNavigation: "notify_connections_when_you_are_in_the_news",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Mentions or Tags",
                    itemNavigation: "mentions_or_tags",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Followers",
                    itemNavigation: "followers",
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
                        <AsideSetting userProps={fakeUserData} navigationProps="visibility"/>
                    </div>
                    <main>
                        {asideProfileVisibilityItemList.map((value, index) => (
                            <SettingScaffold key={index} settingProps={value}/>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfileVisibilitySettingPage;