import {useTokenRefresh} from "@/hooks";
import {fakeUserData} from "@/constants";
import {AsideSetting, Header, SettingScaffold} from "@/components";

const AdsSettingPage = () => {
    useTokenRefresh();

    const asideAdsDataItemList = [
        {
            itemTitle: "Advertising preferences",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Profile data for personalizing ads",
                    itemNavigation: "profile_data_for_personalizing_ads",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Interest categories",
                    itemNavigation: "interest_categories",
                    hasSettingItemChevronRight: false,
                },
            ]
        },
        {
            itemTitle: "Data collected on Recial",
            itemProps: [
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
                    itemTitle: "Location",
                    itemNavigation: "location",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Demographics",
                    itemNavigation: "demographics",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Companies you follow",
                    itemNavigation: "companies_you_follow",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Groups",
                    itemNavigation: "groups",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Education",
                    itemNavigation: "education",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Job Information",
                    itemNavigation: "job_information",
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
                        <AsideSetting userProps={fakeUserData} navigationProps="advertising_data"/>
                    </div>
                    <main>
                        {asideAdsDataItemList.map((value, index) => (
                            <SettingScaffold key={index} settingProps={value}/>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdsSettingPage;