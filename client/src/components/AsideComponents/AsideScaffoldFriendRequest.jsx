import { shallowEqual, useSelector } from "react-redux";

import { FriendRequestItem } from "@/components";

const AsideScaffoldFriendRequest = ({ aside, action }) => {
    const userProps = useSelector(state => state.user, shallowEqual);

    return (
        <>
            { userProps?.friend_request?.length ? (
                <div className="mb-[5px] mt-[-8px]">
                    <div className="pb-[4px] pt-[20px] px-[8px] flex flex-col relative">
                        <div className="flex flex-col grow relative">
                            <span className="block text-[17px] text-black text-left font-semibold break-words leading-5 relative">
                                <span className="overflow-hidden relative">
                                    { userProps?.friend_request?.length + " " + aside?.title }
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            ) : null }
            <div className="px-[8px]">
                { userProps?.friend_request?.map((value, index) => (
                    <FriendRequestItem key={index} userProps={value} action={action}/>
                )) }
            </div>
        </>
    )
};

export default AsideScaffoldFriendRequest;