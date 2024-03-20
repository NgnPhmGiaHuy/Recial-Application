import {AsideMessageContent, AsideMessageHeader, SmallSearchInput} from "@/components";

const AsideMessage = ({ action }) => {
    return (
        <div className="w-[360px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[360px] bg-white border-r border-solid border-zinc-200 overflow-y-auto no-scrollbar">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="mt-[16px] p-[8px] flex flex-col grow relative">
                        <AsideMessageHeader/>
                        <div>
                            <SmallSearchInput id="aside-message" name="session-aside-message" placeholder="Search Message"/>
                        </div>
                        <AsideMessageContent action={action}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideMessage;