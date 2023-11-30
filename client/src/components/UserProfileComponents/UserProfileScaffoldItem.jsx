import Image from "next/image";

const UserProfileScaffoldItem = ({userProps}) => {
    return (
        <div className="w-4/12 mb-[4px] flex relative">
            <div className="w-full h-full mr-[4px] relative">
                <div className="w-full overflow-hidden rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                    <a href="" className="w-full pb-[100%] block relative">
                        <div className="top-0 right-0 bottom-0 left-0 absolute">
                            <div className="w-full h-full overflow-hidden relative">
                                <Image src={userProps.photo_url || userProps.profile_picture_url} alt={`${userProps.photo_url || userProps.profile_picture_url}-image`} fill className="object-cover"/>
                            </div>
                        </div>
                    </a>
                </div>
                {userProps.username ? (
                    <div className="min-h-[30px] mt-[8px] flex flex-col">
                        <a href="">
                            <span className="text-[13px] text-black text-left font-semibold relative leading-4 hover:underline">
                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                    {userProps.username}
                                </span>
                            </span>
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default UserProfileScaffoldItem;