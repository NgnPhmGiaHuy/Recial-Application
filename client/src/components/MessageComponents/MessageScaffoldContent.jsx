import { MessageScaffoldContentDestination, MessageScaffoldContentFooter, MessageScaffoldContentHeader, MessageScaffoldContentPresentation, MessageScaffoldContentSource, MessageScaffoldContentSourceWithTimeStamp, MessageScaffoldContentStatus, MessageScaffoldContentTimeStamp } from "@/components";

const MessageScaffoldContent = ({ handleShowInfo }) => {
    return (
        <div className="flex flex-col flex-shrink grow basis-0 overflow-hidden relative">
            <MessageScaffoldContentHeader handleShowInfo={handleShowInfo}/>
            <div className="h-full flex flex-col grow basis-full overflow-hidden relative">
                <div className="flex flex-col flex-shrink grow basis-auto items-stretch overflow-y-auto overflow-x-hidden isolate relative">
                    <MessageScaffoldContentPresentation/>
                    <div className="flex flex-col relative">
                        <MessageScaffoldContentSourceWithTimeStamp/>
                        <MessageScaffoldContentDestination/>
                        <MessageScaffoldContentSource/>
                        <MessageScaffoldContentSource/>
                        <MessageScaffoldContentStatus status={{ isSent: true }}/>
                    </div>
                </div>
                <MessageScaffoldContentFooter/>
            </div>
        </div>
    );
};

export default MessageScaffoldContent;