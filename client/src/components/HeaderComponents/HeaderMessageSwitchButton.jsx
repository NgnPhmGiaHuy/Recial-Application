"use client"

import { useToggleState } from "@/hooks";

const HeaderMessageSwitchButton = () =>{
    const [isHeaderMessageSwitchButtonChecked, setIsHeaderMessageSwitchButtonChecked, handleHeaderMessageSwitchButton] = useToggleState(false);

    return(
        <div className="ml-[12px] flex items-center justify-start">
            <div className="h-[24px] overflow-x-auto overflow-y-auto inline-block relative">
                <div className="w-[44px] h-[24px] rounded-xl relative overflow-hidden">
                    <div className={`${isHeaderMessageSwitchButtonChecked ? "bg-lime-500" : "bg-zinc-300"} absolute inset-0 z-0 transition-all`}></div>
                    <div className={`${isHeaderMessageSwitchButtonChecked ? "transform translate-x-5" : null} w-[20px] h-[20px] top-[2px] left-[2px] absolute rounded-full z-10 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 ease-in-out`}></div>
                </div>
                <input type="checkbox" className="w-full h-full absolute opacity-0 top-0 left-0 z-20 cursor-pointer" onClick={handleHeaderMessageSwitchButton} checked={isHeaderMessageSwitchButtonChecked}/>
            </div>
        </div>
    )
}

export default HeaderMessageSwitchButton;