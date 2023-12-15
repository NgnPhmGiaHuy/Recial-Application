import Image from "next/image";
import Link from "next/link";

const UserProfileScaffoldItem = ({userProps}) => {
    return (
        <div className="w-4/12 mb-[4px] flex relative">
            <div className="w-full h-full mr-[4px] relative">
                <div className="w-full overflow-hidden rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                    <Link href={userProps?._id || userProps?.user?._id} className="w-full pb-[100%] block relative">
                        <div className="top-0 right-0 bottom-0 left-0 absolute">
                            <div className="w-full h-full overflow-hidden relative">
                                <Image src={userProps?.photo_url || userProps?.user?.profile_picture_url} alt={`${userProps?.photo_url || userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </div>
                    </Link>
                </div>
                {userProps?.user?.username ? (
                    <div className="min-h-[30px] mt-[8px] flex flex-col">
                        <Link href={userProps?.user?._id}>
                            <span className="text-[13px] text-black text-left font-semibold relative leading-4 hover:underline">
                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                    {userProps?.user?.username || userProps?.user?.first_name + " " + userProps?.user?.last_name}
                                </span>
                            </span>
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default UserProfileScaffoldItem;