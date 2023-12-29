import Link from "next/link";
import Image from "next/image";

const UserAboutScaffoldItem = ({ userProps }) => {
    return (
        <div className="w-[calc(50%-4px)] mb-[8px] p-[16px] flex items-center rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)]">
            <div>
                <Link href={userProps?._id ? `/group/${userProps?._id}` : `/${userProps?.user?._id}`}>
                    <div className="mr-[16px] rounded-md border border-solid border-zinc-100 bg-white relative">
                        <div className="w-[80px] h-[80px] rounded-md overflow-hidden relative">
                            <Image src={userProps?.user?.profile_picture_url || userProps?.group_picture_url} alt={`${userProps?.user?.profile_picture_url || userProps?.group_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="pr-[16px] flex flex-col flex-grow relative">
                <div>
                    <Link href={userProps?._id ? `/group/${userProps?._id}` : `/${userProps?.user?._id}`}>
                        <span className="text-[17px] text-black text-left font-semibold break-words relative leading-5 hover:underline">
                            <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                {userProps?.group_name ? userProps?.group_name : (userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname) }
                            </span>
                        </span>
                    </Link>
                </div>
                {userProps?.mutual_friends && userProps?.mutual_friends?.length ? (
                    <div className="mt-[4px]">
                        <span className="text-[13px] text-zinc-500 text-left font-normal break-words cursor-pointer relative leading-4 hover:underline">
                            <span className="overflow-hidden relative">
                                {userProps?.mutual_friends?.length} mutual friends
                            </span>
                        </span>
                    </div>
                ) : null}
                {userProps?.group_member && userProps?.group_member?.length ? (
                    <div className="mt-[4px] flex flex-row items-center text-zinc-500 relative gap-3">
                        <div className="flex flex-row items-center relative gap-1 after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500 after:mr-[-8px]">
                            <div className="w-[12px] h-[12px] flex items-center justify-center overflow-hidden relative">
                                <i>
                                    {userProps?.group_privacy === "Public" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    )}
                                </i>
                            </div>
                            <span className="text-[13px] text-left font-normal break-words relative leading-4">
                                <span className="overflow-hidden relative">
                                    {userProps?.group_privacy === "Public" ? "Public group" : "Private group"}
                                </span>
                            </span>
                        </div>
                        <a href="">
                            <span className="text-[13px] text-left font-normal break-words relative leading-4 hover:underline">
                                <span className="overflow-hidden relative">
                                    {userProps?.group_member?.length} members
                                </span>
                            </span>
                        </a>
                    </div>
                ) : null}
            </div>
            {userProps?.user?.username ? (
                <div className="m-[-6px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-between relative">
                    <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                        <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer rounded-full overflow-hidden relative hover:bg-zinc-100">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default UserAboutScaffoldItem;