import {fakeUserData} from "@/constants";
import {AsideSetting, Header, SettingScaffold} from "@/components";

const AuthenticationSettingPage = ({userProps}) => {
    const asideSignInAndSecurityItemList = [
        {
            itemTitle: "Account access",
            itemProps: [
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Email addresses",
                    itemNavigation: "email_addresses",
                    itemProps: `${fakeUserData.user.email}`,
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Phone numbers",
                    itemNavigation: "phone_numbers",
                    itemProps: `${fakeUserData.user.phone_number}`,
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Change password",
                    itemNavigation: "change_password",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Where you're signed in",
                    itemNavigation: "where_you_are_signed_in",
                    hasSettingItemChevronRight: false,
                },
                {
                    itemLink: "",
                    itemImage: "",
                    itemTitle: "Two-step verification",
                    itemNavigation: "two_step_verification",
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
                        <AsideSetting userProps={fakeUserData} navigationProps="signIn_security"/>
                    </div>
                    <main>
                        {asideSignInAndSecurityItemList.map((value, index) => (
                            <SettingScaffold key={index} settingProps={value}/>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationSettingPage;