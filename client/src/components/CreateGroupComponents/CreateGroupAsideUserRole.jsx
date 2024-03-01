import Link from "next/link";
import Image from "next/image";

const CreateGroupAsideUserRole = ({ userProps }) => {
    return (
        <section>
            <div className="flex flex-col flex-shrink grow basis-full relative">
                <div className="flex flex-col grow relative">
                    <div className="mt-[12px] mb-[24px]">
                        <div className="flex flex-col flex-shrink relative">
                            <div className="px-[8px]">
                                <Link href={`/${userProps?.user?._id}`}>
                                    <div className="min-h-[44px] px-[8px] flex flex-row items-center justify-between rounded-xl overflow-hidden relative bg-zinc-100 transition-all">
                                        <div className="my-[8px] mr-[12px] flex flex-col self-start bg-lime-500 rounded-lg overflow-hidden relative">
                                            <div className="w-[48px] h-[48px] flex items-center text-white justify-center relative">
                                                <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-shrink grow items-start justify-start relative">
                                            <div>
                                                <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.user?.username || userProps?.user?.firstname + userProps?.user?.lastname}
                                                    </span>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block text-[12px] text-black text-left font-medium break-words relative leading-5">
                                                    <span className="overflow-hidden relative">
                                                        Admin
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateGroupAsideUserRole;