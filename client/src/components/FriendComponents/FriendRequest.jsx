import {FriendRequestItem} from "@/components";

const FriendRequest = ({friendRequestProps}) => {
    return (
        <section className="flex flex-col rounded-md bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="w-full h-full p-[12px] relative">
                <div className="w-full py-[8px] flex flex-row flex-auto items-center justify-between border-b border-solid border-zinc-200 relative">
                    <div className="flex flex-col items-center relative">
                        <span className="block text-[14px] text-left text-black font-semibold break-words relative leading-5">
                            <span className="overflow-x-hidden overflow-y-hidden relative">
                                Friend request
                            </span>
                        </span>
                    </div>
                    <a href="/friends" >
                        <span className="block text-[14px] text-left text-lime-500 font-semibold break-words relative leading-5 hover:text-lime-700 transition-all">
                            See all
                        </span>
                    </a>
                </div>
                <div>
                    {friendRequestProps.map((value, index) => (
                        <FriendRequestItem key={index} friendRequestProps={value}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FriendRequest;