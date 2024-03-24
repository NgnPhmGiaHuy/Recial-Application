import { MessageScaffoldContentSource, MessageScaffoldContentTimeStamp } from "@/components";

const MessageScaffoldContentSourceWithTimeStamp = () => {
    return (
        <div>
            <MessageScaffoldContentTimeStamp/>
            <div>
                <MessageScaffoldContentSource/>
            </div>
        </div>
    );
};

export default MessageScaffoldContentSourceWithTimeStamp;