const UserProfileCoverNavigationItem = ({itemProps, navigationProps}) => {
    return (
        <li className={`${navigationProps === itemProps.navigationName ? "after:w-full after:h-[3px] after:rounded-md after:bg-lime-300 after:bottom-[-3px] after:relative" : "hover:bg-zinc-100"} ml-[6px] my-[-8px] flex flex-col rounded-md items-center transition-all`}>
            <a href={itemProps.navigationLink} className={`${navigationProps === itemProps.navigationName ? "text-lime-500" : "text-zinc-500 hover:text-black"} px-[16px] py-[8px] flex flex-row items-center relative transition-all`}>
                <span className="text-[16px] text-left font-bold break-words leading-6 relative">
                    <span className="overflow-hidden relative">
                        {itemProps.navigationTitle}
                    </span>
                </span>
            </a>
        </li>
    )
}

export default UserProfileCoverNavigationItem;