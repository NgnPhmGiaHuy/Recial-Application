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
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageCreateUser;