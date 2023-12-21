import {UserProfileScaffoldItem} from "@/components";

const UserProfileScaffold = ({userProps, mediaProps, isPhotoList, isFriendList}) => {
    return (
        <section className="mb-[16px] flex flex-col bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative overflow-hidden">
            <div className="pt-[20px] pb-[4px] flex flex-col relative">
                <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                    <div className="flex flex-row flex-nowrap items-center justify-between relative">
                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                            <span className="text-[20px] text-black font-bold break-words relative leading-6">
                                <span className="overflow-hidden relative">
                                    {isPhotoList ? "Photos" : null}
                                    {isFriendList ? "Friends" :""}
                                </span>
                            </span>
                        </div>
                        <div className="ml-[8px] flex flex-col flex-shrink-0 self-start justify-center">
                            <a href="" className="p-[6px] rounded-md overflow-hidden relative hover:bg-zinc-100">
                                <span className="text-[16px] text-lime-700 text-left font-normal break-words relative leading-4 transition-all">
                                    <span className="overflow-hidden relative">
                                        See all {isPhotoList ? "photos" : null} {isFriendList ? "friends" :""}
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-[28px]">
                <div className="m-[-6px] px-[16px] pt-[16px] flex flex-nowrap items-stretch justify-between relative">
                    <div className="p-[6px] flex flex-col flex-shrink grow basis-0 relative">
                        <div className="mb-[-4px] mr-[-4px] flex flex-wrap">
                            {mediaProps ? (
                                mediaProps?.slice(0, 9).map((value, index) => (
                                    <UserProfileScaffoldItem key={index} userProps={userProps} mediaProps={value}/>
                                ))
                            ) : (
                                userProps?.slice(0, 9).map((value, index) => (
                                    <UserProfileScaffoldItem key={index} userProps={value}/>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfileScaffold;