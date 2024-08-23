import { shallowEqual, useSelector } from "react-redux";

const UserProfileCoverInformation = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    return (
        <div>
            <div className="mt-[8px] flex flex-col relative">
                <div className="flex flex-col relative">
                    <span className="block text-[32px] text-black text-left font-semibold break-words leading-10">
                        <span className="overflow-hidden text-ellipsis relative">
                            { userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname }
                        </span>
                    </span>
                </div>
                { userProps?.user?.contact?.short_description && (
                    <div className="mb-[4px] flex flex-col relative">
                        <p className="block text-[16px] text-black text-left font-normal break-words leading-5">
                            <span className="overflow-hidden line-clamp-2 relative">
                                { userProps?.user?.contact.short_description }
                            </span>
                        </p>
                    </div>
                ) }
                <div className="flex flex-row items-center relative">
                    {userProps?.user?.job_title && (
                        <div className="pr-[4px] flex flex-col relative">
                            <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                <span className="overflow-hidden relative">
                                    {userProps?.user?.job_title}
                                </span>
                            </span>
                        </div>
                    ) }
                    <div className="flex flex-row items-center relative">
                        { userProps?.user?.contact?.location && (
                            <div className="pr-[4px] flex items-center after:ml-[4px] after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500">
                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        {userProps?.user?.location?.contact?.city}, {userProps?.user?.location?.contact?.state}, {userProps?.user?.location?.contact?.country}
                                    </span>
                                </span>
                            </div>
                        ) }
                        {userProps?.user?.follower && userProps.user?.follower.length ? (
                            <div className="pr-[4px] flex items-center after:ml-[4px] after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500">
                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        {userProps?.user?.follower.length} follower
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
    );
};

export default UserProfileCoverInformation;