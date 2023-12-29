import Image from "next/image";

import {AsideSettingItem} from "@/components";
import {asideSettingItemList} from "@/constants/AsideConstants";

const AsideSetting = ({ userProps, navigationProps }) => {
    return (
        <aside className="lg:w-[280px] w-fit h-[calc(100vh-52px)] block bg-white overflow-y-auto fixed">
            <section className="block">
                <div className="lg:p-[24px] px-[12px] py-[24px] flex flex-wrap items-center gap-[12px]">
                    <div>
                        <a href="">
                            <div className="w-[32px] h-[32px] rounded-full overflow-hidden relative">
                                <Image src={userProps.user.profile_picture_url} alt={`${userProps.user.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </a>
                    </div>
                    <div className="lg:block hidden">
                        <span className="text-[32px] text-black text-left font-semibold break-words relative leading-10">
                            <span className="overflow-hidden relative">
                                Settings
                            </span>
                        </span>
                    </div>
                </div>
                <ul>
                    {asideSettingItemList.map((value, index) => (
                        <AsideSettingItem key={index} itemProps={value} navigationProps={navigationProps}/>
                    ))}
                </ul>
            </section>
        </aside>
    );
};

export default AsideSetting;