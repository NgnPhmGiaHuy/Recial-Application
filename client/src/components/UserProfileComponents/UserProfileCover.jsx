import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

import { UserProfileCoverFooter, UserProfileCoverInformation, UserProfileCoverNavigation } from "@/components";

const UserProfileCover = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    return (
        <section className="flex flex-col bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="flex flex-col relative">
                <div className="w-full h-[134px] flex flex-col relative">
                    <div className="top-0 right-0 bottom-0 left-0 absolute">
                        <figure className="w-full h-[134px] rounded-t-xl overflow-hidden relative">
                            { userProps?.user?.profile?.profile_cover_photo_url && (
                                <div className="w-full h-full bg-white relative">
                                    <Image src={userProps?.user?.profile?.profile_cover_photo_url} alt={`${userProps?.user?.profile?.profile_cover_photo_url}-image`} fill={true} loading="lazy" sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            ) }
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <div className="px-[24px] pb-[24px]">
                        <div className="mt-[64px] flex flex-col relative">
                            <div className="h-0">
                                <div className="w-[128px] h-[128px] border-2 border-solid border-white rounded-xl overflow-hidden relative translate-y-[-100%]">
                                    <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} loading="lazy" sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                            <UserProfileCoverInformation/>
                        </div>
                        <UserProfileCoverFooter/>
                    </div>
                    <div>
                        <UserProfileCoverNavigation/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfileCover;