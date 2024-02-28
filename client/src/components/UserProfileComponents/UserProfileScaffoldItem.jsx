import Link from "next/link";
import Image from "next/image";

const UserProfileScaffoldItem = ({ userProps, mediaProps }) => {
    return (
        <div className="w-4/12 mb-[4px] flex relative">
            <div className="w-[calc(100%-4px)] h-full mr-[4px] relative">
                <div className="w-full overflow-hidden rounded-lg outline-zinc-200 outline shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                    {mediaProps ? (
                        <Link href={`/photo/?user=${userProps?.user?._id}&photo=${mediaProps?._id}`} className="w-full pb-[100%] block relative">
                            <div className="top-0 right-0 bottom-0 left-0 absolute">
                                <div className="w-full h-full overflow-hidden relative">
                                    <Image src={mediaProps?.photo_url} alt={`${mediaProps?.photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <Link href={`/${userProps?.user?._id}`} className="w-full pb-[100%] block relative">
                            <div className="top-0 right-0 bottom-0 left-0 absolute">
                                <div className="w-full h-full overflow-hidden relative">
                                    <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
                {!mediaProps && userProps?.user?.username ? (
                    <div className="min-h-[30px] mt-[8px] flex flex-col">
                        <Link href={userProps?.user?._id}>
                            <span className="text-[13px] text-black text-left font-semibold break-words relative leading-4 hover:underline">
                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                    {userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname}
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