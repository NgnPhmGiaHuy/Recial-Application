import { ChevronDownIcon, ChevronUpIcon } from "@/components";

const AsideShowMoreOrShowLessButton = ({ showMore, onClick }) => {
    return(
        <div className="px-[8px]">
            <div className="block rounded-md hover:bg-zinc-200 cursor-pointer transition-all" onClick={onClick}>
                <div className="min-h-[44px] px-[8px] flex flex-row items-center justify-between relative">
                    <div className="my-[4px] mr-[6px] flex flex-col self-center relative">
                        <div className="w-[36px] h-[36px] flex flex-row items-center justify-center rounded-full bg-gray-300 relative">
                            { showMore ? (
                                <ChevronDownIcon fill="none" stroke="currentColor" strokeWidth={3} width={16} height={16} />
                            ) : (
                                <ChevronUpIcon fill="none" stroke="currentColor" strokeWidth={3} width={16} height={16} />
                            ) }
                        </div>
                    </div>
                    <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                        <div className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                            <div className="my-[-5px] flex flex-col">
                                <div className="my-[5px]">
                                    <span className="block text-[14px] text-black text-left font-medium break-words leading-4">
                                        <span className="overflow-hidden line-clamp-2 relative">
                                            { showMore ? "Show more" : "Show less" }
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideShowMoreOrShowLessButton;