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
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Personal demographic information",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Verifications",
                    chevronRight: false,
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