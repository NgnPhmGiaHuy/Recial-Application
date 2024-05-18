import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

import { FriendRequestItem } from "@/components";

const FriendRequest = () => {
    const userProps = useSelector(state => state.user, shallowEqual);

    return (
        <section className="flex flex-col rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="w-full h-full p-[12px] relative">
                <div className="w-full py-[8px] flex flex-row flex-auto items-center justify-between border-b border-solid border-zinc-200 relative">
                    <div className="flex flex-col items-center relative">
                        <div className="before:w-[3px] before:h-full before:left-[-12px] before:rounded-md before:bg-lime-500 before:absolute">
                            <span className="block text-[14px] text-left text-black font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Friend request
                                </span>
                            </span>
                        </div>
                    </div>
                    <Link href="/friends" >
                        <span className="block text-[14px] text-left text-lime-500 font-semibold break-words relative leading-5 hover:text-lime-700 transition-all">
                            See all
                        </span>
                    </Link>
                </div>
                <div>
                    { userProps?.friend_request?.slice(0, 5).map((value, index) => (
                        <FriendRequestItem key={index} userProps={value}/>
                    )) }
                </div>
            </div>
        </section>
    );
};

export default FriendRequest;