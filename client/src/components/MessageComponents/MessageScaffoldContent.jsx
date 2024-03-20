import { MessageScaffoldContentFooter, MessageScaffoldContentHeader, MessageScaffoldContentPresentation } from "@/components";

const MessageScaffoldContent = ({ handleShowInfo }) => {
    return (
        <div className="flex flex-col flex-shrink grow basis-0 overflow-hidden relative">
            <MessageScaffoldContentHeader handleShowInfo={handleShowInfo}/>
            <div className="h-full flex flex-col grow basis-full overflow-hidden relative">
                <div className="flex flex-col flex-shrink grow basis-auto items-stretch overflow-hidden isolate relative">
                    <MessageScaffoldContentPresentation/>
                    <div>

                    </div>
                </div>
                <MessageScaffoldContentFooter/>
            </div>
        </div>
    );
};

export default MessageScaffoldContent;