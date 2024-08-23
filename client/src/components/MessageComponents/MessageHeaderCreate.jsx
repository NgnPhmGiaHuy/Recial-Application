import { PencilSquareIcon } from "@/components";

const MessageHeaderCreate = () => {
    return (
        <div>
            <div className="w-full h-full flex flex-col ">
                <div className="flex flex-row items-center mx-[10px] mb-[0px] p-[8px] rounded-3xl hover:bg-zinc-100 transition-all cursor-pointer">
                    <div className="w-[56px] h-[56px] mr-[8px] flex flex-row items-center justify-center text-white border border-solid border-gray-500 rounded-3xl bg-lime-500">
                        <PencilSquareIcon width={20} height={20} />
                    </div>
                    <div className="flex flex-row items-center text-left text-[16px] font-semibold leading-5">
                        <h3>New message</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageHeaderCreate;