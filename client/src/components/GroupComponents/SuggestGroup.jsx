import Image from "next/image";

const SuggestGroup = ({userProps}) => {
    return (
        <section className="flex flex-col rounded-md bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="w-full h-full p-[12px] relative">
                <div className="w-full py-[8px] flex flex-row flex-auto items-center justify-between border-b border-solid border-zinc-200 relative">
                    <div className="flex flex-col items-center relative">
                        <span className="block text-[14px] text-left text-black font-semibold break-words relative leading-5">
                            <span className="overflow-x-hidden overflow-y-hidden relative">
                                Suggest Group
                            </span>
                        </span>
                    </div>
                    <a href="" >
                        <span className="block text-[14px] text-left text-lime-500 font-semibold break-words relative leading-5 hover:text-lime-700">
                            See all
                        </span>
                    </a>
                </div>
            </div>
            <div className="w-full h-full p-[12px] relative">
                <div className="w-full py-[8px] flex flex-col justify-between relative">
                    <a href="" className="w-full h-[200px] rounded-md border border-solid border-zinc-200 overflow-hidden group relative">
                        <Image src={userProps.group_picture_url} alt={`${userProps.group_picture_url}-image`} fill className="p-[4px] object-contain"/>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
                    </a>
                    <div className="ml-[14px] my-[12px] flex flex-row items-center relative">
                        {userProps.members.slice(0, 4).map((value, index) => {
                            const zIndexValue = index;
                            return (
                                <a href="" key={index}>
                                    <div style={{ zIndex: zIndexValue }} className="w-[40px] h-[40px] ml-[-14px] border-[2px] border-solid border-white rounded-full relative cursor-pointer overflow-hidden">
                                        <Image src={value.profile_picture_url} alt={`${value.profile_picture_url}-image`} fill className="object-cover" />
                                    </div>
                                </a>
                            );
                        })}
                        {userProps.members.length > 4 ? (
                            <div className="w-[40px] h-[40px] ml-[-14px] flex items-center justify-center border-[2px] border-solid border-white rounded-full bg-zinc-200 relative cursor-pointer overflow-hidden z-10">
                                <span className="block text-[16px] text-center text-zinc-500 font-bold break-words relative leading-5">
                                    <span className="overflow-x-hidden overflow-y-hidden relative">
                                        +{userProps.members.length - 4}
                                    </span>
                                </span>
                            </div>
                        ) : null}
                        <div className="flex flex-col justify-between relative">
                            <span className="block text-[14px] text-center text-zinc-700 font-bold break-words relative leading-5">
                                <span className="overflow-x-hidden overflow-y-hidden relative">
                                    Member apply
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between relative">
                        <div className="w-full h-full flex flex-col flex-shrink grow basis-auto relative">
                            <div className="flex flex-col justify-center cursor-pointer">
                                <a href="">
                                    <div className="h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-md bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                        <div className="mx-[3px] flex flex-shrink-0 items-center justify-center relative">
                                            <span className="block text-[15px] text-black font-semibold break-words relative leading-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="mx-[3px] flex flex-shrink-0 items-center justify-center relative">
                                            <span className="block text-[15px] text-black font-semibold break-words relative leading-5">
                                                <span className="block overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis relative">
                                                    {userProps.group_name}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuggestGroup;