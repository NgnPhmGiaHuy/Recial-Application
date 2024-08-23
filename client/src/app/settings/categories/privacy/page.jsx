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
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Get a copy of your data",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Search history",
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
                    title: "Social, economic, and workplace research",
                    showChevron: false,
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
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Invitations from your network",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Messages",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Research invites",
                    showChevron: false,
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
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Read receipts and typing indicators",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Messaging suggestions",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Message nudges",
                    showChevron: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Automated detection of harmful content",
                    showChevron: false,
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