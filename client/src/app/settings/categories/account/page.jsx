import {useTokenRefresh} from "@/hooks";
import {fakeUserData} from "@/constants";
import {AsideSetting, Header, SettingScaffold} from "@/components";

const AccountSettingPage = () => {
    useTokenRefresh();

    const asideAccountPreferenceItemList = [
        {
            itemTitle: "Profile information",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Name, location, and industry",
                    itemNavigation: "name_location_industry",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Personal demographic information",
                    itemNavigation: "personal_demographic_information",
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
        {
            itemTitle: "Display",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Dark mode",
                    itemNavigation: "dark_mode",
                    hasSettingItemChevronRight: false,
                },
            ]
        },
        {
            itemTitle: "General preferences",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Language",
                    itemNavigation: "language",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Content language",
                    itemNavigation: "content_language",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Autoplay videos",
                    itemNavigation: "autoplay_videos",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Showing profile photos",
                    itemNavigation: "showing_profile_photos",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Feed preferences",
                    itemNavigation: "feed_preferences",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "People also viewed",
                    itemNavigation: "people_also_viewed",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "People you unfollowed",
                    itemNavigation: "people_you_unfollowed",
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
                        <AsideSetting userProps={fakeUserData} navigationProps="account_preferences"/>
                    </div>
                    <main>
                        {asideAccountPreferenceItemList.map((value, index) => (
                            <SettingScaffold key={index} settingProps={value}/>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AccountSettingPage;