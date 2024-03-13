"use client"

import { useUserData } from "@/hooks";
import { AsideSetting, Header, SettingScaffold } from "@/components";

const PrivacySettingPage = () => {
    const asideDataPrivacyItemList = [
        {
            title: "How Recial uses your data",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Manage your data and activity",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Get a copy of your data",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Search history",
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
                    title: "Social, economic, and workplace research",
                    chevronRight: false,
                },
            ]
        },
        {
            title: "Who can reach you",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Invitations to connect",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Invitations from your network",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Messages",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Research invites",
                    chevronRight: false,
                },
            ]
        },
        {
            title: "Messaging experience",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Focused Inbox",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Read receipts and typing indicators",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Messaging suggestions",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Message nudges",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Automated detection of harmful content",
                    chevronRight: false,
                },
            ]
        },
    ]

    const { userProps, setUserProps } = useUserData();

    return (
        <div>
            <Header/>
            <div className="mt-[56px] mr-[24px] mb-[24px]">
                <div className="min-h-[calc(100vh-76px)] my-[24px] grid lg:grid-cols-[minmax(280px,3fr)_minmax(0,21fr)] grid-cols-[minmax(100px,3fr)_minmax(0,21fr)] grid-rows-[1fr_auto] gap-x-[2.4rem] gap-y-[2.4rem]">
                    <div>
                        <AsideSetting userProps={userProps}/>
                    </div>
                    <main>
                        {asideDataPrivacyItemList.map((value, index) => (
                            <SettingScaffold key={index} settingProps={value}/>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PrivacySettingPage;