const CreateGroupAsideFormPrivacyMenuItem = ({ icon, title, subtitle , groupPrivacy, groupVisible, handleSetGroupPrivacy, handleSetGroupVisible }) => {
    const onClickHandler = groupPrivacy ? () => handleSetGroupPrivacy(title) : () => handleSetGroupVisible(title);

    return (
        <div className="min-w-[330px] mx-[4px] px-[12px] py-[8px] flex flex-row flex-shrink-0 items-center cursor-pointer rounded-xl hover:bg-zinc-100 transition-all relative" onClick={onClickHandler}>
            <div className="mr-[12px] flex items-center align-baseline justify-center">
                <div className="w-[42px] h-[42px] flex items-center justify-center rounded-xl bg-zinc-200 relative">
                    { icon }
                </div>
            </div>
            <div className="flex grow items-center justify-between">
                <div className="flex flex-col">
                    <span className="block text-[16px] text-black text-left font-medium break-words leading-5">
                        <span className="overflow-hidden line-clamp-1 relative">
                            { title }
                        </span>
                    </span>
                    <span className="block text-[13px] text-zinc-700 text-left font-normal break-words leading-4">
                        <span className="overflow-hidden line-clamp-2 relative">
                            { subtitle }
                        </span>
                    </span>
                    { groupPrivacy && (
                        <span className="block text-[12px] text-zinc-500 text-left font-normal break-words leading-4">
                            <span className="overflow-hidden line-clamp-2 relative">
                                You { title.toLowerCase() === "public" ? "can" : "cannot" } change to { title.toLowerCase() === "public" ? "private" : "public" } later.
                            </span>
                        </span>
                    ) }
                </div>
            </div>
            <div className="ml-[8px]">
                <div className={`${(groupPrivacy?.toLowerCase() === title.toLowerCase()) || (groupVisible?.toLowerCase() === title.toLowerCase()) ? "outline-lime-500" : "outline-zinc-500"} w-[20px] h-[20px] p-[4px] flex items-center justify-center rounded-full outline relative`}>
                    <div className={`${(groupPrivacy?.toLowerCase() === title.toLowerCase()) || (groupVisible?.toLowerCase() === title.toLowerCase()) ? "bg-lime-500" : ""} w-[12px] h-[12px] flex items-center justify-center rounded-full overflow-hidden relative`}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupAsideFormPrivacyMenuItem;