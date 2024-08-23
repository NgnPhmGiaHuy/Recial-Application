import Link from "next/link";

import { GlobeAltIcon, LockClosedIcon } from "@/components";

const CreateGroupReviewContentName = ({ state }) => {
    return (
        <div className="pb-[16px] flex flex-row flex-wrap items-stretch bg-white relative">
            <div className="max-w-[980px] px-[16px] flex flex-col flex-shrink grow basis-0 relative">
                <div className="m-[-6px] pt-[16px] flex flex-row flex-wrap items-end justify-between relative">
                    <div className="pt-[6px] pb-[16px] px-[6px] flex flex-col flex-shrink basis-0 grow-[9999] relative">
                        <div className="mt-[16px]">
                            <div className="my-[-8px] flex flex-col flex-shrink-0 grow relative">
                                <div className="my-[8px]">
                                    <span className="block text-[28px] text-black text-left font-bold break-words relative leading-8">
                                        <span className="overflow-hidden relative">
                                            { state.inputData.inputValue ? state.inputData.inputValue : "Group name" }
                                        </span>
                                    </span>
                                </div>
                                <div className="my-[8px]">
                                    <div className="my-[-2px] flex flex-row flex-wrap items-center justify-start relative">
                                        <div className="p-[2px] flex flex-col flex-shrink-0 relative">
                                            <div className="m-[-2px] flex flex-row items-center justify-start relative">
                                                <div className="w-[12px] h-[12px] flex items-center justify-center relative rounded-xl overflow-hidden">
                                                    { state.groupPrivacy.toLowerCase() === "public" ? (
                                                        <GlobeAltIcon fill="none" stroke="currentColor" width={12} height={12} />
                                                    ) : (
                                                        <LockClosedIcon fill="none" stroke="currentColor" width={12} height={12} />
                                                    ) }
                                                </div>
                                                <div className="m-[2px] flex flex-col flex-shrink-0 relative">
                                                    <span className="block text-[15px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                                        { state.groupPrivacy } group
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-[4px] pt-[8px] pb-[4px] flex flex-col flex-shrink-0 relative">
                                            <span className="w-[3px] h-[3px] bg-zinc-500 rounded-full overflow-hidden relative">
                                                &nbsp;
                                            </span>
                                        </div>
                                        <div className="p-[2px] flex flex-col flex-shrink-0 relative">
                                            <Link href="">
                                                <span className="text-[15px] text-zinc-700 text-left font-semibold break-words relative leading-5 hover:underline transition-all">
                                                    1 member
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewContentName;