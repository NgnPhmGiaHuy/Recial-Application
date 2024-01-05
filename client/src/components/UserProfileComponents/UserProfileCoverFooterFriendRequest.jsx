import { setUserFriendRequest } from "@/app/api/fetchUserData";

const UserProfileCoverFooterFriendRequest = ({ userProps }) => {
    const handleFriendRequest = async (status) => {
        try {
            await setUserFriendRequest(status, userProps);
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className="mt-[16px]">
            <div className="w-full pb-[16px] flex relative">
                <div className="w-full bg-zinc-100 rounded-md overflow-hidden relative">
                    <div className="flex flex-row flex-wrap items-stretch justify-between relative">
                        <div className="p-[12px] flex flex-col flex-shrink-0 items-center self-center relative">
                            <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname} sent you a friend request
                                </span>
                            </span>
                        </div>
                        <div className="p-[6px] flex flex-shrink-0 self-center relative">
                            <div className="flex flex-row flex-wrap flex-shrink-0 items-stretch justify-between relative">
                                <div className="p-[6px] flex flex-col flex-shrink grow basis-auto relative">
                                    <div className="w-full flex flex-col justify-center cursor-pointer relative" onClick={() => handleFriendRequest("Confirm")}>
                                        <div className="h-[36px] px-[12px] flex flex-nowrap flex-shrink-0 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-700 relative transition-all">
                                            <span className="block text-[16px] text-white text-center font-semibold break-words leading-5">
                                                <span className="overflow-hidden relative">
                                                    Confirm request
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-[6px] flex flex-col flex-shrink grow basis-auto relative">
                                    <div className="w-full flex flex-col justify-center cursor-pointer relative" onClick={() => handleFriendRequest("Delete")}>
                                        <div className="h-[36px] px-[12px] flex flex-nowrap flex-shrink-0 items-center justify-center rounded-md bg-zinc-200 hover:bg-zinc-300 relative transition-all">
                                            <span className="block text-[16px] text-gray-700 text-center font-semibold break-words leading-5">
                                                <span className="overflow-hidden relative">
                                                    Delete request
                                                </span>
                                            </span>
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

export default UserProfileCoverFooterFriendRequest;