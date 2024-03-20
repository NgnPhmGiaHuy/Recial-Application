import { useToggleState } from "@/hooks";
import { MessageScaffoldInfoListItem, MessageScaffoldInfoListMenu } from "@/components";

const MessageScaffoldInfoList = ({ title, list }) => {
    const [showListItem, setShowListItem, handleShowListItem] = useToggleState(false);

    return (
        <div>
            <div className="flex flex-col grow relative">
                <MessageScaffoldInfoListMenu title={title} showListItem={showListItem} handleShowListItem={handleShowListItem}/>
                { showListItem && (
                    list.map((value, index) => (
                        <MessageScaffoldInfoListItem key={index} button={value}/>
                    ))
                ) }
            </div>
        </div>
    )
};

export default MessageScaffoldInfoList;