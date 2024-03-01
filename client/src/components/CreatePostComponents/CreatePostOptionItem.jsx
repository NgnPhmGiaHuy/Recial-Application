const CreatePostOptionItem = ({ createPostItemData, cursorNotAllow }) => {
    const onClickHandler = cursorNotAllow ? undefined : createPostItemData.onclick;

    return (
        <div className={`${cursorNotAllow ? "" : "cursor-pointer hover:bg-zinc-200"} sm:min-w-fit w-full sm:p-[8px] p-[4px] flex flex-row flex-shrink grow basis-0 items-center justify-center rounded-md bg-transparent relative`} onClick={onClickHandler}>
            <div className="flex items-center justify-center overflow-hidden leading-3">
                <div className="sm:w-[20px] w-[16px] sm:h-[20px] h-[16px] inline-flex flex-shrink-0 grow overflow-hidden relative">
                    <i>
                        {createPostItemData.icon}
                    </i>
                </div>
            </div>
        </div>
    );
};

export default CreatePostOptionItem;