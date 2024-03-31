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
};

export default CreateGroupReviewContentNavigationItem;