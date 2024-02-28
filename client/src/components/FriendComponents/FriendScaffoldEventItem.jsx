import Image from "next/image";

import { formatDateTime } from "@/utils";
import Illustration from "/public/images/Illustration/illustration-of-a-man-and-a-woman-watering-a-plant.jpg";

const FriendScaffoldEventItem = ({ userProps }) => {
    return (
        <li className="my-[12px] h-full flex flex-col items-center justify-center text-center align-top hyphens-auto relative hover:">
            <section className="w-full h-full relative">
                <a href="">
                    <div className="w-full h-full rounded-xl outline outline-black/30 bg-white relative hover:shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2),0px_4px_4px_rgb(0_0_0/0.3)] transition-all">
                        <div className="top-[12px] right-[12px] absolute z-20">
                            <div className="w-[28px] h-[28px] flex items-center justify-center text-white rounded-xl cursor-pointer overflow-hidden bg-black/60 hover:bg-black/70 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </i>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col rounded-xl overflow-hidden relative">
                            <div className="w-full h-[140px] flex items-center justify-center rounded-t-xl overflow-hidden relative">
                                {userProps.cover_photo_url ? (
                                    <Image src={userProps.cover_photo_url} alt={`${userProps.cover_photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                ) : (
                                    <Image src={Illustration} alt={`${Illustration}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                )}
                                <div className="absolute inset-0 bg-black opacity-10 transition-opacity"></div>
                            </div>
                            <div className="px-[12px] pt-[12px] flex flex-col flex-1 relative">
                                <div className="flex flex-col relative">
                                    <div className="flex flex-col relative">
                                        <span className="max-h-[76px] block text-[16px] text-left text-black font-semibold break-words relative leading-5">
                                            <span className="overflow-hidden line-clamp-2 text-ellipsis relative">
                                                {userProps.event_name}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-[8px] flex flex-col relative">
                                    <div className="flex flex-col relative">
                                        <span className="block text-[14px] text-left text-black font-normal break-words relative leading-5">
                                            <span className="overflow-hidden line-clamp-2 text-ellipsis relative">
                                                {formatDateTime(userProps.start_datetime)}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-[8px] flex flex-row items-center relative">
                                    <div className="w-[12px] h-[12px] mr-[2px] flex items-center justify-center overflow-hidden transition-all">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                        </i>
                                    </div>
                                    <div className="flex flex-col relative">
                                        <span className="block text-[12px] text-left text-black font-normal break-words relative leading-5">
                                            <span className="overflow-hidden line-clamp-2 text-ellipsis relative">
                                                {userProps.participants.length} attendees
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[8px] px-[12px] pb-[12px]">
                                <div className="w-full px-[16px] py-[6px] flex items-center justify-center gap-2 cursor-pointer outline text-lime-900 rounded-xl relative hover:outline-[2px] hover:bg-lime-100 hover:text-black transition-all">
                                    <div className="flex flex-col items-center relative">
                                        <span className="block text-[14px] font-bold break-words relative leading-5">
                                            <span className="overflow-hidden relative">
                                                Follow
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </li>
    );
};

export default FriendScaffoldEventItem;