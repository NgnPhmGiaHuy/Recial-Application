import { MessageScaffoldContentDestination, MessageScaffoldContentDestinationWithTimeStamp, MessageScaffoldContentSource, MessageScaffoldContentSourceWithTimeStamp } from "@/components";

const renderMessageComponent = (message, index, userProps, timestampDisplayMemo) =>  {
    if (message.user._id === userProps?.user?._id) {
        const shouldDisplay = timestampDisplayMemo[message?._id];
        const ComponentToRender = shouldDisplay ? MessageScaffoldContentSourceWithTimeStamp : MessageScaffoldContentSource;

        return <ComponentToRender key={index} messageProps={message} />;
    } else {
        const shouldDisplay = timestampDisplayMemo[message?._id];
        const ComponentToRender = shouldDisplay ? MessageScaffoldContentDestinationWithTimeStamp : MessageScaffoldContentDestination;

        return <ComponentToRender key={index} messageProps={message} />;
    }
};

export default renderMessageComponent;