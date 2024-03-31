import { useSelector } from "react-redux";

import { useGetUserDataFetcher } from "@/hooks";
import { MessageContentItem } from "@/components";
import { setUserMessageData } from "@/store/actions/user/userActions";

const MessageHeaderContent = () => {
    const userProps = useSelector(state => state.user);

    const { isLoading } = useGetUserDataFetcher("message", setUserMessageData);

    return (
        <div>
            {isLoading ? (
                <div className="w-full h-full py-[16px] flex items-center justify-center relative">
                    <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            ) : (
                <ul className="flex flex-col relative">
                    {userProps?.messages?.map((value, index) => (
                        <MessageContentItem key={index} messageProps={value}/>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MessageHeaderContent;