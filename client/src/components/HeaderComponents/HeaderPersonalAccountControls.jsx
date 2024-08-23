"use client"

import { useRouter } from "next/navigation";

import { useLogout } from "@/hooks";
import { ArrowRightStartOnRectangleIcon, HeaderPersonalAccountSettingItem } from "@/components";

import HEADER_PERSONAL_ACCOUNT from "@/constants/HeaderConstants/HeaderPersonal";

const HeaderPersonalAccountControls = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const logout = await useLogout(router);
        try {
            return await logout();
        } catch (error) {
            return console.error("Logout failed: ", error);
        }
    }

    return (
        <div>
            <div className="pt-[4px] pb-[8px]">
                <div className="mt-[-4px] mb-[-16px]">
                    { HEADER_PERSONAL_ACCOUNT.map((value, index) => (
                        <HeaderPersonalAccountSettingItem key={index} settingProps={value}/>
                    )) }
                    <div className="px-[8px]">
                        <div className="min-h-[44px] px-[8px] flex flex-row items-center justify-between rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                            <div className="my-[6px] mr-[12px] flex flex-col self-start relative">
                                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-xl bg-zinc-200 relative">
                                    <ArrowRightStartOnRectangleIcon fill="none" stroke="currentColor"/>
                                </div>
                            </div>
                            <div className="flex flex-row flex-shrink items-center justify-between grow self-stretch relative"
                                onClick={handleLogout}>
                                <div className="py-[8px] flex flex-col flex-shrink grow items-stretch basis-0 relative">
                                    <span className="block text-[14px] text-black text-left font-medium break-words leading-4">
                                        Log Out
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPersonalAccountControls;