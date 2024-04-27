import { MessageScaffoldContentDestination, MessageScaffoldContentTimeStamp } from "@/components";

const MessageScaffoldContentDestinationWithTimeStamp = ({ messageProps }) => {
    return (
        <div>
            <MessageScaffoldContentTimeStamp messageProps={messageProps}/>
            <div>
                <MessageScaffoldContentDestination messageProps={messageProps}/>
            </div>
        </div>
    );
};

export default MessageScaffoldContentDestinationWithTimeStamp;