import { ChevronDownIcon, ChevronUpIcon } from "@/components";

const MessageScaffoldInfoListMenu = ({ title, showListItem, handleShowListItem }) => {
    return (
        <div className="px-[8px] flex flex-col flex-shrink-0 relative">
            <div className="m-[-6px] p-[8px] flex flex-col items-stretch justify-center relative">
                <div className="flex flex-row flex-nowrap flex-shrink-0 items-center justify-between rounded-md hover:bg-zinc-100 overflow-hidden cursor-pointer relative transition-all">
                    <div className="p-[6px] flex flex-row flex-wrap flex-shrink grow items-center justify-between basis-auto" onClick={handleShowListItem}>
                        <div className="h-[24px] flex flex-col flex-shrink-0 relative">
                            <span className="block text-[14px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    { title }
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="w-[28px] h-[28px] flex items-center justify-center overflow-hidden relative">
                        { showListItem ? (
                            <ChevronUpIcon width={16} height={16} />
                        ) : (
                            <ChevronDownIcon width={16} height={16} />
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MessageScaffoldInfoListMenu;