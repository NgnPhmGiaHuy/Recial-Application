import Link from "next/link";

import { ArrowLeftIcon, CogIcon } from "@/components";

const AsideScaffoldHeader = ({ aside }) => {
    return (
        <section>
            <div className="min-h-[48px] px-[4px] flex flex-row items-center justify-between relative">
                { aside.subtitle && (
                    <Link href="/friends">
                        <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                            <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-xl relative hover:bg-zinc-200 transition-all">
                                <ArrowLeftIcon fill="none" stroke="currentColor" width={24} height={24} />
                            </div>
                        </div>
                    </Link>
                ) }
                <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                    <div
                        className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                        <div className="my-[-5px] flex flex-col">
                            { aside.subtitle && (
                                <Link href="">
                                    <span className="block text-[13px] text-black text-left font-normal break-words leading-4">
                                        <span className="overflow-hidden relative">
                                            { aside.subtitle }
                                        </span>
                                    </span>
                                </Link>
                            ) }
                            <div className="my-[5px]">
                                <span className="block text-[24px] text-black text-left font-bold break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        { aside.title }
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                { !aside.subtitle && (
                    <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                        <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full cursor-pointer bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                            <CogIcon fill="none" stroke="currentColor" width={24} height={24} />
                        </div>
                    </div>
                ) }
            </div>
        </section>
    );
};

export default AsideScaffoldHeader;