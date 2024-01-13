"use client"

import { useUserData } from "@/hooks";
import { AsideSetting, Header, SettingScaffold } from "@/components";

const AdsSettingPage = () => {
    const asideAdsDataItemList = [
        {
            title: "Advertising preferences",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Profile data for personalizing ads",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Interest categories",
                    chevronRight: false,
                },
            ]
        },
        {
            title: "Data collected on Recial",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Connections",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Location",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Demographics",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Companies you follow",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Groups",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Education",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Job Information",
                    chevronRight: false,
                },
            ]
        },
        {
            title: "General preferences",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Language",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Content language",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Autoplay videos",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Showing profile photos",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Feed preferences",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "People also viewed",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "People you unfollowed",
                    chevronRight: false,
                },
            ]
        },
    ]

    const { userProps, setUserProps } = useUserData();

    return (
        <div>
            <Header userProps={userProps}/>
            <div className="mt-[56px] mr-[24px] mb-[24px]">
                <div className="min-h-[calc(100vh-76px)] my-[24px] grid lg:grid-cols-[minmax(280px,3fr)_minmax(0,21fr)] grid-cols-[minmax(100px,3fr)_minmax(0,21fr)] grid-rows-[1fr_auto] gap-x-[2.4rem] gap-y-[2.4rem]">
                    <div>
                        <AsideSetting userProps={userProps}/>
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