import Link from "next/link";
import Image from "next/image";

import { XMarkIcon } from "@/components";
import Illustration from "/public/images/Illustration/illustration-of-a-man-and-a-woman-watering-a-plant.jpg";

const FriendScaffoldProfileItem = ({ userProps }) => {
    return (
        <li className="my-[12px] h-full flex flex-col items-center justify-center text-center align-top hyphens-auto relative hover">
            <section className="w-full h-full relative">
                <Link href="">
                    <div className="w-full h-full p-[12px] rounded-xl bg-white relative outline outline-black/30 hover:shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2),0px_4px_4px_rgb(0_0_0/0.3)] transition-all">
                        <div className="top-[12px] right-[12px] absolute z-20">
                            <div className="w-[28px] h-[28px] flex items-center justify-center text-white rounded-xl cursor-pointer overflow-hidden bg-black/60 hover:bg-black/70 transition-all">
                                <XMarkIcon fill="none" stroke="currentColor" />
                            </div>
                        </div>
                        <div className="w-full h-full top-0 left-0 absolute ">
                            <div className="w-full h-[62px] flex items-center justify-center rounded-t-xl overflow-hidden relative">
                                {userProps?.profile_cover_photo_url ? (
                                    <Image src={userProps?.profile_cover_photo_url} alt={`${userProps?.profile_cover_photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                ) : (
                                    <Image src={Illustration} alt={`${Illustration}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                )}
                                <div className="absolute inset-0 bg-black opacity-10 transition-opacity"></div>
                            </div>
                        </div>
                        <div className="mb-[100px] flex flex-col items-center justify-center rounded-xl overflow-hidden relative">
                            <div className="flex flex-col items-center justify-center relative">
                                <div className="w-[104px] h-[104px] mb-[8px] flex items-center justify-center rounded-full overflow-hidden relative">
                                    <Image src={userProps?.profile_picture_url} alt={`${userProps?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                                <div className="flex flex-col justify-between relative">
                                    <span className="block text-[16px] text-center text-zinc-500 font-bold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            {userProps?.username}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-[12px] bottom-0 left-0 right-0 absolute">
                            {userProps?.mutual_friends?.length && (
                                <div className="min-h-[32px] flex flex-row flex-nowrap items-center justify-center relative">
                                    <div className="flex flex-row items-center justify-between relative">
                                        <div className="ml-[8px] flex flex-row items-center justify-center relative">
                                            {userProps?.mutual_friends?.slice(0, 3).map((value, index) => {
                                                const zIndexValue = 10 - index;
                                                return (
                                                    <div key={index} style={{ zIndex: zIndexValue }} className="w-[20px] h-[20px] ml-[-8px] border-[2px] border-solid border-white rounded-full relative cursor-pointer overflow-hidden">
                                                        <Image src={value.profile_picture_url} alt={`${value.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="flex flex-col items-center relative">
                                            <span className="block text-[14px] text-zinc-500 font-medium break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    {userProps?.mutual_friends?.length} mutual friends
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="mt-[8px]">
                                <div className="w-full px-[16px] py-[6px] flex items-center justify-center gap-2 cursor-pointer outline text-lime-900 rounded-xl relative hover:outline-[2px] hover:bg-lime-100 hover:text-black transition-all">
                                    <div className="flex flex-col items-center relative">
                                        <div className="w-[20px] h-[20px] flex flex-row items-center justify-center relative">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center relative">
                                        <span className="block text-[14px] font-bold break-words relative leading-5">
                                            Connect
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </li>
    );
};

export default FriendScaffoldProfileItem;