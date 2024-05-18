import Link from "next/link";

const MessageScaffoldInfoHeaderButton = ({ button }) => {
    return (
        button && (
            <div>
                <div className="w-[72px] flex flex-col flex-shrink-0 relative">
                    <div className="flex flex-col grow relative">
                        <div className="flex flex-col flex-shrink-0 items-center relative">
                            <Link href={button.link}>
                                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-zinc-200 overflow-hidden hover:bg-zinc-300 relative transition-all">
                                    <i>
                                        { button?.icon }
                                    </i>
                                </div>
                            </Link>
                        </div>
                        <div className="pt-[8px] flex flex-col flex-shrink-0 items-center relative">
                            <span className="block text-[12px] text-zinc-500 text-center font-normal break-words relative leading-3">
                                <span className="overflow-hidden relative">
                                    { button?.title }
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default MessageScaffoldInfoHeaderButton;