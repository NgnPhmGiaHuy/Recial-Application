import {FriendScaffoldItem} from "@/components";

const FriendScaffold = ({userData}) => {
    return (
        <div className="flex flex-col grow items-stretch justify-center relative">
            <div className="flex flex-col flex-shrink-0 grow relative">
                <div className="w-full mt-[16px] relative">
                    <div className="w-full flex flex-row items-start justify-center relative">
                        <div className="w-full h-full mb-[32px] mr-[32px] p-[16px] flex flex-col justify-between rounded-md bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                            <div>
                                {userData.suggest_friends.suggested_friends_by_location.slice(0, 2).map((value, index) => (
                                    <FriendScaffoldItem key={index} userData={value}/>
                                ))}
                            </div>
                            <div>
                                <FriendScaffoldItem userData={userData.suggest_event}/>
                            </div>
                            <div>
                                {userData.suggest_friends.suggested_friends_by_job.slice(0, 2).map((value, index) => (
                                    <FriendScaffoldItem key={index} userData={value}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendScaffold;