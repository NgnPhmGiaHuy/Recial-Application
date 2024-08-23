import { EllipsisHorizontalIcon, PencilSquareIcon } from "@/components";

const AsideMessageHeader = ({ setShowCreateMessage }) => {
    return (
        <section>
            <div className="min-h-[48px] px-[4px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                    <div className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                        <div className="my-[-5px] flex flex-col">
                            <div className="my-[5px]">
                                <span className="block text-[32px] text-black text-left font-bold break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        Chats
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-2 relative">
                        <div className="my-[6px] flex flex-col self-center relative">
                            <div className="w-[36px] h-[36px] flex flex-row items-center justify-center rounded-xl cursor-pointer bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                <EllipsisHorizontalIcon fill="none" stroke="currentColor" />
                            </div>
                        </div>
                        <div className="my-[6px] flex flex-col self-center relative">
                            <div onClick={() => setShowCreateMessage(prevState => !prevState)}>
                                <div className="w-[36px] h-[36px] flex flex-row items-center justify-center rounded-xl cursor-pointer bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                    <PencilSquareIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AsideMessageHeader;