import Link from "next/link";

const CreateGroupAsideHeader = () => {
    return (
        <section>
            <div className="min-h-[48px] px-[4px] flex flex-row items-center justify-start relative">
                <div>
                    <Link href="/groups/feed">
                        <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                            <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-xl relative hover:bg-zinc-200 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                        <div className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                            <div className="my-[-5px] flex flex-col">
                                <div className="flex flex-row items-center justify-start gap-1 text-[12px] text-zinc-500 font-normal break-words relative leading-3">
                                    <Link href="/groups/feed">
                                        <span className="overflow-hidden hover:underline relative transition-all">
                                            Groups
                                        </span>
                                    </Link>
                                    <span>
                                        ›
                                    </span>
                                    <Link href="/groups/create">
                                        <span className="overflow-hidden hover:underline relative transition-all">
                                            Create group
                                        </span>
                                    </Link>
                                </div>
                                <div className="my-[5px]">
                                    <span className="block text-[24px] text-black text-left font-bold break-words leading-5">
                                        <span className="overflow-hidden relative">
                                            Create group
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateGroupAsideHeader;