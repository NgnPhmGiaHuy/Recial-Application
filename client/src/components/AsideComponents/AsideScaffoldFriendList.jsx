import { FriendListItem } from "@/components";

const AsideScaffoldFriendList = ({ aside, action, userProps }) => {
    return (
        <>
            <div className="mb-[5px] mt-[-8px]">
                <div className="pb-[4px] pt-[20px] px-[8px] flex flex-col relative">
                    <div className="flex flex-col grow relative">
                        <span className="block text-[17px] text-black text-left font-semibold break-words leading-5 relative">
                            <span className="overflow-hidden relative">
                                {userProps?.user?.friends?.length + " " + aside?.title}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="px-[8px]">
                {userProps?.user?.friends?.map((value, index) => (
                    <FriendListItem key={index} userProps={value} action={action}/>
                ))}
            </div>
        </>
    );
};

export default AsideScaffoldFriendList;