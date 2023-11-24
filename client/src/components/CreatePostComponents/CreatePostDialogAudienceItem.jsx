const CreatePostDialogAudienceItem = ({ createPostAudienceData, checked, onSelect }) => {
    return (
        <div className="px-[8px]">
            <div className="min-h-[44px] px-[8px] flex flex-row items-center justify-between cursor-pointer rounded-md relative hover:bg-zinc-100" onClick={onSelect}>
                <div className="my-[8px] mr-[12px] flex flex-col items-start relative">
                    <div className="w-[60px] h-[60px] inline-flex items-center justify-center rounded-full bg-zinc-200 relative">
                        {createPostAudienceData.createPostAudienceIcon}
                    </div>
                </div>
                <div className="flex flex-row flex-shrink grow self-stretch items-center justify-between relative">
                    <div className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col">
                            <div className="mt-[5px]">
                                <span className="block text-[17px] text-black text-left font-medium break-words leading-5">
                                    {createPostAudienceData.createPostAudienceOptionTitle}
                                </span>
                            </div>
                            <div className="mb-[5px]">
                                <span className="block text-[15px] text-zinc-500 text-left font-normal break-words leading-5">
                                    {createPostAudienceData.createPostAudienceExplain}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="my-[12px] ml-[12px] self-center relative">
                        <div className="flex flex-row items-center">
                            <div className={`${checked ? "border-lime-500" : "border-zinc-500"} w-[20px] h-[20px] inline-block overflow-hidden border border-solid rounded-full relative`}>
                                <div className={`${checked ? "bg-lime-500" : "bg-none"} w-[15px] h-[15px] top-[1.5px] left-[1.5px] rounded-full absolute`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialogAudienceItem;