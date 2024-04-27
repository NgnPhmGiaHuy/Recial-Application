"use client"

import { Tooltip } from "react-tooltip";

const MessageScaffoldContentFooterButton = ({ button, toolTip }) => {
    return (
        <div className="mx-[4px] p-[8px] flex flex-row flex-shrink-0 flex-grow-0 items-stretch cursor-pointer rounded-full hover:bg-zinc-100 transition-all relative">
            <div data-tooltip-id={toolTip.id} data-tooltip-content={toolTip.content} className="w-[20px] h-[20px] flex items-center justify-center text-lime-500 relative">
                <i>
                    {button.icon}
                </i>
            </div>
            <Tooltip id={toolTip.id} className="z-20"/>
        </div>
    )
}

export default MessageScaffoldContentFooterButton;