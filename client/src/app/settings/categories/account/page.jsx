"use client"

import { useUserData } from "@/hooks";
import { AsideSetting, Header, SettingScaffold } from "@/components";

const AccountSettingPage = () => {
    const { userProps, setUserProps } = useUserData();

    const asideAccountPreferenceItemList = [
        {
            title: "Profile information",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Name, location, and industry",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Personal demographic information",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Verifications",
                    showChevron: false,
                },
            ]
        },
        {
            title: "Display",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Dark mode",
                    showChevron: false,
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
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Content language",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Autoplay videos",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Showing profile photos",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Feed preferences",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "People also viewed",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "People you unfollowed",
                    showChevron: false,
                },
            ]
        },
    ]

    return (
        <div>
            <Header/>
            <div className="mt-[56px] mr-[24px] mb-[24px]">
                <div className="min-h-[calc(100vh-76px)] my-[24px] grid lg:grid-cols-[minmax(280px,3fr)_minmax(0,21fr)] grid-cols-[minmax(100px,3fr)_minmax(0,21fr)] grid-rows-[1fr_auto] gap-x-[2.4rem] gap-y-[2.4rem]">
                    <div>
                        <AsideSetting userProps={userProps}/>
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