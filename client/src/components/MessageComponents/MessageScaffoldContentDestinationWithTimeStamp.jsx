import { MessageScaffoldContentDestination, MessageScaffoldContentTimeStamp } from "@/components";

const MessageScaffoldContentDestinationWithTimeStamp = () => {
    return (
        <div>
            <MessageScaffoldContentTimeStamp/>
            <div>
                <MessageScaffoldContentDestination/>
            </div>
        </div>
    );
};

export default MessageScaffoldContentDestinationWithTimeStamp;