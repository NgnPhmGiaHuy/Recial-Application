"use client"

import { useUserData } from "@/hooks";
import { AsideSetting, Header, SettingScaffold } from "@/components";

const AuthenticationSettingPage = () => {
    const { userProps, setUserProps } = useUserData();

    const asideSignInAndSecurityItemList = [
        {
            title: "Account access",
            itemProps: [
                {
                    link: "",
                    icon: "",
                    title: "Email addresses",
                    itemProps: `${userProps?.user?.email}`,
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Phone numbers",
                    itemProps: `${userProps?.user?.phone_number}`,
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Change password",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Where you're signed in",
                    chevronRight: false,
                },
                {
                    link: "",
                    icon: "",
                    title: "Two-step verification",
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