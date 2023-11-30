import Image from "next/image";

import {HeaderPersonalAccountSettingItem} from "@/components";
import {headerPersonalAccountSettingItemList} from "@/constants/HeaderConstants";

const HeaderPersonalAccount = ({forwardedRef, userProps}) => {
    return (
        <div ref={forwardedRef} className="absolute top-0 left-0 translate-x-[-172px] translate-y-[48px]">
            <div className="mt-[5px]">
                <div className="overflow-x-hidden overflow-y-hidden rounded-md bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="w-[360px] max-w-[calc(100vw-24px] max-h-[calc(100vh-56px-16px)] flex flex-col overflow-x-auto overscroll-x-contain overflow-y-auto overscroll-y-contain relative">
                        <div className="flex flex-col grow relative">
                            <div className="w-auto h-auto overflow-x-hidden overflow-y-hidden relative">
                                <div className="w-full h-full">
                                    <div className="pt-[8px] pb-[12px] flex flex-col grow relative">
                                        <div className="flex flex-col flex-shrink-0 relative">
                                            <div className="mx-[16px] mb-[16px] mt-[4px]">
                                                <div className="w-full flex flex-col rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                                                    <a href="" className="mx-[4px] my-[8px] rounded-md relative hover:bg-zinc-100 transition-all cursor-pointer">
                                                        <div className="my-[-4px] p-[8px] flex flex-row flex-nowrap items-center justify-between">
                                                            <div className="p-[4px] flex flex-col flex-shrink-0 items-center justify-center relative">
                                                                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-hidden relative">
                                                                    <Image src={userProps.user.profile_picture_url} alt={`${userProps.user.profile_picture_url} image`} fill className="object-cover"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-[4px] flex flex-col flex-shrink grow relative">
                                                                <span className="block text-[16px] text-left text-black font-semibold break-words leading-4">
                                                                    {userProps.user.username}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <hr className=" h-[1px] mx-[16px] bg-zinc-300"/>
                                                    <div className="mx-[4px] my-[8px] rounded-md relative hover:bg-zinc-100 transition-all cursor-pointer">
                                                        <div className="my-[-4px] p-[8px] flex flex-row flex-nowrap items-center justify-between relative">
                                                            <div className="p-[4px] flex flex-col flex-shrink basis-0 grow relative">
                                                                <span className="block text-[14px] text-left text-lime-500 font-medium break-words leading-4">
                                                                    See all profiles
                                                                </span>
                                                            </div>
                                                            <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                                                <span className="w-[18px] h-[18px] inline-flex items-center justify-center text-[13px] text-left text-white font-medium break-words bg-red-500 rounded-full leading-2">
                                                                    2
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-[4px] pb-[8px]">
                                            <div className="mt-[-4px] mb-[-16px]">
                                                {headerPersonalAccountSettingItemList.map((value, index) => (
                                                    <HeaderPersonalAccountSettingItem key={index} settingItemData={value}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPersonalAccount;