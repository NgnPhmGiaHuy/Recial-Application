import { MessageScaffoldInfoHeader, MessageScaffoldInfoList } from "@/components";

import MESSAGE_SCAFFOLD_INFO_LIST from "@/constants/MessageConstants/MessageScaffoldInfoConstants";

const MessageScaffoldInfo = () => {
    const list = MESSAGE_SCAFFOLD_INFO_LIST();

    return (
        <div className="max-w-[380px] min-w-[250px] flex flex-col basis-1/3 border-l border-solid border-zinc-200 relative">
            <div className="flex flex-col flex-shrink grow basis-full relative">
                <div className="mb-[16px] flex flex-col flex-shrink grow basis-full overflow-auto overscroll-x-contain relative">
                    <div className="h-[calc(100vh-56px)] overflow-hidden relative">
                        <div className="w-full h-full top-0 left-0 absolute">
                            <div className="flex flex-col grow relative">
                                <MessageScaffoldInfoHeader/>
                                <div className="py-[20px] flex flex-col flex-shrink-0 relative">
                                    { list.map((value, index) => (
                                        <MessageScaffoldInfoList key={index} title={value.menu} list={value.list}/>
                                    )) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldInfo;