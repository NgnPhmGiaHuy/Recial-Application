import Image from "next/image";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { toggleCreatePost, toggleCreatePostAudience, toggleCreatePostPanel } from "@/store/actions/toggle/toggleActions";
import { ChevronDownIcon, GlobeAltIcon, LockClosedIcon, UserIcon, UsersIcon, XMarkIcon } from "@/components";

const CreatePostDialogCardHeader = () => {
    const dispatch = useDispatch();

    const userProps = useSelector(state => state.user, shallowEqual);

    const handleToggleShowCreatePost = () => {
        return dispatch(toggleCreatePost());
    }

    const handleShowCreatePostAudience = () => {
        dispatch(toggleCreatePostPanel());

        return dispatch(toggleCreatePostAudience());
    }

    return(
        <div>
            <div className="relative">
                <div className="h-[60px] flex items-center justify-center border-b border-solid border-zinc-200 relative">
                    <span className="block text-[20px] text-black font-bold leading-6">
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap break-words relative">
                            Create post
                        </span>
                    </span>
                </div>
                <div className="top-[12px] right-[16px] absolute">
                    <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-hidden cursor-pointer bg-zinc-200 relative hover:bg-zinc-300" onClick={handleToggleShowCreatePost}>
                        <XMarkIcon fill="none" stroke="currentColor" />
                    </div>
                </div>
            </div>
            <div className="mx-[16px] py-[16px] flex items-center relative">
                <div className="inline-block relative">
                    <div className="min-w-[300px] p-[12px] flex flex-row items-center rounded-xl cursor-pointer relative hover:bg-zinc-100" onClick={handleShowCreatePostAudience}>
                        <div className="mr-[12px] inline-block align-bottom relative">
                            <div className="w-[56px] h-[56px] rounded-full overflow-hidden relative">
                                <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="flex flex-row flex-shrink-0 relative">
                                <span className="block text-[20px] text-black font-semibold break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        {userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname}
                                    </span>
                                </span>
                            </div>
                            <div className="mt-[4px] flex items-center relative">
                                <div className="flex flex-row basis-auto items-stretch justify-center cursor-pointer relative">
                                    <span className="block text-[14px] text-black font-semibold break-words leading-4">
                                        <div className="px-[8px] py-[6px] rounded-xl bg-zinc-200 relative">
                                            <div className="flex items-center justify-center">
                                                <div className="mr-[4px] inline-flex items-center justify-center">
                                                    { userProps?.settings?.privacy?.post_visibility === "Public" ? (
                                                        <GlobeAltIcon fill="none" stroke="currentColor" width={12} height={12}  />
                                                    ) : userProps?.settings?.privacy?.post_visibility === "Private" ? (
                                                        <LockClosedIcon fill="none" stroke="currentColor" width={12} height={12}  />
                                                    ) : userProps?.settings?.privacy?.post_visibility === "Friends" ? (
                                                        <UsersIcon fill="none" stroke="currentColor" width={12} height={12} />
                                                    ) : userProps?.settings?.privacy?.post_visibility === "Specific_Friends" ? (
                                                        <UserIcon fill="none" stroke="currentColor" width={12} height={12} />
                                                    ) : null }
                                                </div>
                                                <span className="mr-[4px] inline-flex items-center justify-center">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.settings?.privacy?.post_visibility}
                                                    </span>
                                                </span>
                                                <div className="inline-flex items-center justify-center">
                                                    <ChevronDownIcon fill="none" stroke="currentColor" width={12} height={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostDialogCardHeader;