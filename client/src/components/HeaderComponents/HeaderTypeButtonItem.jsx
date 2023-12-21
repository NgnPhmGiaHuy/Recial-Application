const HeaderTypeButtonItem = ({type, showType, onClick}) => {
    const isCurrentType = showType === type;
    const buttonClasses = `w-full h-[36px] px-[12px] flex flex-row justify-center items-center rounded-lg cursor-pointer relative ${
        isCurrentType ? "bg-lime-200 hover:bg-lime-300 text-lime-900" : "bg-transparent hover:bg-zinc-200 text-black"
    }`;

    return (
        <div className="h-full pr-[8px]" onClick={() => onClick(type)}>
            <div className={buttonClasses}>
                <span className="text-[15px] font-semibold break-words leading-5">
                    <span className="overflow-x-hidden overflow-y-hidden whitespace-normal text-ellipsis break-words relative">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                </span>
            </div>
        </div>
    );
}

export default HeaderTypeButtonItem;