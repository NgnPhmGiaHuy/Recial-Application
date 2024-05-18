import Image from "next/image";

const MessageCreateInputUser = ({ userProps, participants, setParticipants }) => {
    const addUserToParticipants = () => {
        if (!userProps || !userProps.user || !userProps.user._id) return;

        const userId = userProps.user._id;
        const alreadyExists = participants.some(participant => participant?.user?._id === userId);

        if (!alreadyExists) {
            setParticipants(prevParticipants => [...prevParticipants, userProps]);
        }
    };

    return (
        <div>
            <div className="p-[8px] flex items-center cursor-pointer rounded-xl overflow-hidden relative hover:bg-zinc-200 transition-all">
                <div onClick={addUserToParticipants}>
                    <div className="m-[-6px] flex flex-row flex-nowrap items-center justify-between relative">
                        <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                            <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-hidden relative">
                                <Image src={userProps?.user?.profile?.profile_picture_url} alt={userProps?.user?.profile?.profile_picture_url} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </div>
                        <div className="p-[6px] flex flex-col flex-shrink basis-0 grow relative">
                            <span className="block text-[15px] text-black text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    { userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname }
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageCreateInputUser;