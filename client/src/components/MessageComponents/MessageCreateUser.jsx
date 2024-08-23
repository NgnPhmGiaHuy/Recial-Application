import { XMarkIcon } from "@/components";

const MessageCreateUser = ({ index, userProps, handleRemoveSelectedParticipant }) => {
    return (
        <div>
            <div className="m-[4px]">
                <div className="p-[10px] inline-flex items-center bg-lime-200 text-lime-700 rounded-xl overflow-hidden relative">
                    <div className="mr-[8px] ">
                        <span className="block text-[15px] font-semibold break-words relative leading-5 before:mt-[-4px] after:mb-[-4px]">
                            <span className="overflow-hidden relative">
                                { userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname }
                            </span>
                        </span>
                    </div>
                    <div onClick={() => handleRemoveSelectedParticipant(index)}>
                        <div className="w-[12px] h-[12px] flex items-center justify-center cursor-pointer hover:text-black relative">
                            <XMarkIcon fill="none" stroke="currentColor" strokeWidth={3} width={12} height={12} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageCreateUser;