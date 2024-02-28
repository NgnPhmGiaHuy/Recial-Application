import Image from "next/image";

import { UserProfileCoverFooter, UserProfileCoverNavigation } from "@/components";

const UserProfileCover = ({ userProps, userCheck, handleState }) => {
    return (
        <section className="flex flex-col bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="flex flex-col relative">
                <div className="w-full h-[134px] flex flex-col relative">
                    <div className="top-0 right-0 bottom-0 left-0 absolute">
                        <figure className="w-full h-[134px] rounded-t-xl overflow-hidden relative">
                            {userProps?.user?.profile_cover_photo_url ? (
                                <div className="w-full h-full bg-white relative">
                                    <Image src={userProps?.user?.profile_cover_photo_url} alt={`${userProps?.user?.profile_cover_photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            ) : null}
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <div className="px-[24px] pb-[24px]">
                        <div className="mt-[64px] flex flex-col relative">
                            <div className="h-0">
                                <div className="w-[128px] h-[128px] border-2 border-solid border-white rounded-xl overflow-hidden relative translate-y-[-100%]">
                                    <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                            <div className="mt-[8px] flex flex-col relative">
                                <div className="flex flex-col relative">
                                    <span className="block text-[32px] text-black text-left font-semibold break-words leading-10">
                                        <span className="overflow-hidden text-ellipsis relative">
                                            {userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname}
                                        </span>
                                    </span>
                                </div>
                                {userProps?.user?.short_description ? (
                                    <div className="mb-[4px] flex flex-col relative">
                                        <p className="block text-[16px] text-black text-left font-normal break-words leading-5">
                                            <span className="overflow-hidden line-clamp-2 relative">
                                                {userProps?.user?.short_description}
                                            </span>
                                        </p>
                                    </div>
                                ) : null}
                                <div className="flex flex-row items-center relative">
                                    {userProps?.user?.job_title ? (
                                        <div className="pr-[4px] flex flex-col relative">
                                            <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                <span className="overflow-hidden relative">
                                                    {userProps?.user?.job_title}
                                                </span>
                                            </span>
                                        </div>
                                    ) : null}
                                    <div className="flex flex-row items-center relative">
                                        {userProps?.user?.location ? (
                                            <div className="pr-[4px] flex items-center after:ml-[4px] after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500">
                                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.user?.location?.city}, {userProps?.user?.location?.state}, {userProps?.user?.location?.country}
                                                    </span>
                                                </span>
                                            </div>
                                        ) : null}
                                        {userProps?.user?.followers && userProps.user?.followers.length ? (
                                            <div className="pr-[4px] flex items-center after:ml-[4px] after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500">
                                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.user?.followers.length} follower
                                                    </span>
                                                </span>
                                            </div>
                                        ) : null}
                                        {userProps?.user?.following && userProps.user?.following.length ? (
                                            <div className="pr-[4px] flex items-center after:bg-zinc-500">
                                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.user?.following.length} following
                                                    </span>
                                                </span>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <UserProfileCoverFooter handleState={handleState} userProps={userProps} userCheck={userCheck}/>
                    </div>
                    <div>
                        <UserProfileCoverNavigation userProps={userProps}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfileCover;