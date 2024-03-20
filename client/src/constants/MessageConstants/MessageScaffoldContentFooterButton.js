"use client"

import { Tooltip } from "react-tooltip";

const MessageScaffoldContentFooterButton = ({ button, toolTip }) => {
    return (
        <div className="m-[4px] p-[4px]">
            <div data-tooltip-id={toolTip.id} data-tooltip-content={toolTip.content} className="w-[24px] h-[24px] flex items-center justify-center rounded-full overflow-hidden cursor-pointer text-lime-500 hover:bg-zinc-100 relative transition-all">
                <i>
                    {button.icon}
                </i>
            </div>
            <Tooltip id={toolTip.id} className="z-20"/>
        </div>
    )
}

export default MessageScaffoldContentFooterButton;