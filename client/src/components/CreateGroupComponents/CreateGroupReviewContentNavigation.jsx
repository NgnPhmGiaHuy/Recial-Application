const CreateGroupReviewContentNavigationItem = ({ name }) => {
    return (
        <div className="min-h-[16px] h-[calc(52px-8px)] px-[16px] inline-flex items-center float-left rounded-xl overflow-hidden relative hover:bg-zinc-200 transition-all">
            <span className="block text-[15px] text-zinc-500 text-center font-semibold break-words relative leading-5">
                <span className="overflow-hidden relative">
                    {name}
                </span>
            </span>
        </div>
    )
}

const CreateGroupReviewContentNavigation = () => {
    const navigationName = ["About", "Posts", "Member", "Events"];

    return (
        <div>
            <div className="flex flex-row items-stretch flex-nowrap shadow-md relative">
                <div className="max-w-[980px] px-[16px] flex flex-shrink grow basis-0 relative">
                    <div className="mx-[-4px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-between relative">
                        <div className="px-[4px] flex flex-col flex-shrink grow basis-0 cursor-not-allowed relative">
                            <div className="w-full h-[52px] overflow-hidden relative">
                                <div className="w-full h-full flex flex-row items-center justify-start relative">
                                    {navigationName.map((value, index) => (
                                        <CreateGroupReviewContentNavigationItem key={index} name={value}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewContentNavigation;