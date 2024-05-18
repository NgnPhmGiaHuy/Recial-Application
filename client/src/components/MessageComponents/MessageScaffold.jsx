import { useToggleState } from "@/hooks";
import { MessageScaffoldContent, MessageScaffoldInfo } from "@/components";

const MessageScaffold = () => {
    const [showInfo, setShowInfo, handleShowInfo] = useToggleState(true);

    return (
        <div className="flex flex-col flex-shrink grow basis-0 relative">
            <div className="min-h-[calc(100vh-56px)] flex flex-col flex-shrink grow basis-full bg-white overflow-hidden relative">
                <div className="max-h-[calc(100vh-56px)] flex flex-row flex-shrink flex-nowrap grow items-stretch justify-between relative">
                    <MessageScaffoldContent handleShowInfo={handleShowInfo}/>
                    { showInfo && <MessageScaffoldInfo/>}
                </div>
            </div>
        </div>
    );
};

export default MessageScaffold;