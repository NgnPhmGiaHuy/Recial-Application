import Link from "next/link";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import { fakeUserData } from "@/constants";
import { UserAboutPhotoScaffoldItem, UserAboutScaffoldItem } from "@/components";

const DynamicUserAboutVideoScaffoldItem = dynamic(() => import("@/components/UserProfileComponents/UserAboutVideoScaffoldItem"), { ssr: false });

const UserAboutScaffoldOptions = ({ options }) => {
    const { isCurrentUser } = useSelector(state => state.userRelationship);

    const userProps = isCurrentUser ? useSelector(state => state.user) : useSelector(state => state.userId);

    return (
        <section>
            { options?.isFriendCard && (
                <div className="flex flex-row flex-wrap justify-between relative">
                    { userProps?.user?.friends.slice(0, 8).map((value, index) => (
                        <UserAboutScaffoldItem key={index} userProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isFriendPage && (
                <div className="flex flex-row flex-wrap justify-between relative">
                    { userProps?.user?.friends.map((value, index) => (
                        <UserAboutScaffoldItem key={index} userProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isGroupCard && (
                <div className="flex flex-row flex-wrap justify-between relative">
                    { userProps?.group_list.slice(0, 8).map((value, index) => (
                        <UserAboutScaffoldItem key={index} userProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isGroupPage && (
                <div className="flex flex-row flex-wrap justify-between relative">
                    { userProps?.group_list.map((value, index) => (
                        <UserAboutScaffoldItem key={index} userProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isPhotoCard && (
                <div className="flex flex-row flex-wrap relative">
                    { userProps?.photo_list.slice(0, 8).map((value, index) => (
                        <UserAboutPhotoScaffoldItem key={index} mediaProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isPhotoPage && (
                <div className="flex flex-row flex-wrap relative">
                    { userProps?.photo_list.map((value, index) => (
                        <UserAboutPhotoScaffoldItem key={index} mediaProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isVideoCard && (
                <div className="flex flex-row flex-wrap relative">
                    { userProps?.videos_list.slice(0, 8).map((value, index) => (
                        <DynamicUserAboutVideoScaffoldItem key={index} userProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isVideoPage && (
                <div className="flex flex-row flex-wrap relative">
                    { fakeUserData.videos_list.map((value, index) => (
                        <DynamicUserAboutVideoScaffoldItem key={index} userProps={value}/>
                    )) }
                </div>
            ) }
            { options?.isFriendPage || options?.isGroupPage || options?.isPhotoPage || options?.isVideoPage ? null : (
                <Link href={`${options?.isFriendCard ? "/user/friends" : null}`}>
                    <div className="h-[40px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-lg bg-zinc-100 relative hover:bg-zinc-200 transition-all">
                        <span className="text-[17px] text-black text-left font-semibold break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                See all
                            </span>
                        </span>
                    </div>
                </Link>
            ) }
        </section>
    );
};

export default UserAboutScaffoldOptions;