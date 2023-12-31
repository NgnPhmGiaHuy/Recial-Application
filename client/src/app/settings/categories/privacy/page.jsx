import {fakeUserData} from "@/constants";
import {AsideSetting, Header, SettingScaffold} from "@/components";

const PrivacySettingPage = () => {
    const asideDataPrivacyItemList = [
        {
            itemTitle: "How Recial uses your data",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Manage your data and activity",
                    itemNavigation: "manage_your_data_and_activity",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Get a copy of your data",
                    itemNavigation: "get_a_copy_of_your_data",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Search history",
                    itemNavigation: "search_history",
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
                    itemTitle: "Social, economic, and workplace research",
                    itemNavigation: "social_economic_and_workplace_research",
                    hasSettingItemChevronRight: false,
                },
            ]
        },
        {
            itemTitle: "Who can reach you",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Invitations to connect",
                    itemNavigation: "invitations_to_connect",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Invitations from your network",
                    itemNavigation: "invitations_from_your_network",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Messages",
                    itemNavigation: "messages",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Research invites",
                    itemNavigation: "research_invites",
                    hasSettingItemChevronRight: false,
                },
            ]
        },
        {
            itemTitle: "Messaging experience",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Focused Inbox",
                    itemNavigation: "focused_inbox",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Read receipts and typing indicators",
                    itemNavigation: "read_receipts_and_typing_indicators",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Messaging suggestions",
                    itemNavigation: "messaging_suggestions",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Message nudges",
                    itemNavigation: "message_nudges",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Automated detection of harmful content",
                    itemNavigation: "automated_detection_of_harmful_content",
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
                        <AsideSetting userProps={fakeUserData} navigationProps="data_privacy"/>
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