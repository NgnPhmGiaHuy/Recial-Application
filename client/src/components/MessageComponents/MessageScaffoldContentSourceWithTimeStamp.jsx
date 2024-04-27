import { MessageScaffoldContentSource, MessageScaffoldContentTimeStamp } from "@/components";

const MessageScaffoldContentSourceWithTimeStamp = ({ messageProps }) => {
    return (
        <div>
            <MessageScaffoldContentTimeStamp messageProps={messageProps}/>
            <div>
                <MessageScaffoldContentSource messageProps={messageProps}/>
            </div>
        </div>
    );
};

export default MessageScaffoldContentSourceWithTimeStamp;