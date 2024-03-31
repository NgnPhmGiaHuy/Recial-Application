import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import { formatShortTimeAgo } from "@/utils";
import { MessageScaffoldContentHeaderButton } from "@/components";

import MESSAGE_SCAFFOLD_CONTENT_HEADER_BUTTON from "@/constants/MessageConstants/MessageScaffoldContentHeaderConstant";

const MessageScaffoldContentHeader = ({ handleShowInfo }) => {
    const userProps = useSelector(state => state.user);

    const button = MESSAGE_SCAFFOLD_CONTENT_HEADER_BUTTON({ handleShowInfo });

    return (
        <div>
            <div className="mx-[-6px] px-[16px] py-[12px] flex flex-nowrap items-center justify-between shadow relative">
                <div className="px-[6px] flex flex-col flex-shrink grow basis-0 relative">
                    <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                        <div className="m-[-6px] flex flex-row flex-nowrap items-stretch justify-between relative">
                            <Link href="">
                                <div className="p-[6px] flex flex-col relative">
                                    <div className="m-[-6px] flex flex-row flex-shrink-0 flex-nowrap items-stretch justify-between relative">
                                        <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                                            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-xl relative overflow-hidden">
                                                <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                            </div>
                                        </div>
                                        <div className="px-[2px] py-[6px] flex flex-col flex-shrink grow basis-0 relative">
                                            <div className="min-h-[26px] flex flex-col grow items-start justify-center relative">
                                                <div>
                                                    <span className="block text-[16px] text-black text-left font-semibold break-words relative leading-5">
                                                        <span className="overflow-hidden relative">
                                                            { userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + userProps?.user?.profile?.lastname }
                                                        </span>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-[12px] text-black text-left font-normal break-words relative leading-3">
                                                        <span className="overflow-hidden relative">
                                                            Active {formatShortTimeAgo(userProps?.user?.profile?.updated_at)} ago
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="px-[6px] flex flex-col flex-shrink-0 relative">
                    <div className="m-[-6px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-between relative">
                        {button.map((value, index) => (
                            <MessageScaffoldContentHeaderButton key={index} button={value}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldContentHeader;