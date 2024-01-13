"use client"

import { useUserData } from "@/hooks";
import { AsideSetting, Header, SettingScaffold } from "@/components";

const ProfileVisibilitySettingPage = () => {
    const asideProfileVisibilityItemList = [
        {
            title: "Visibility of your profile & network",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Profile viewing options",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Edit your public profile",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Connections",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Profile discovery using email address",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Profile discovery using phone number",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Blocking",
                    chevronRight: false,
                },
            ]
        },
        {
            title: "Visibility of your Recial activity",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Manage active status",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Share profile updates with your network",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Notify connections when you're in the news",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Mentions or Tags",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Followers",
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