const FriendRequestItemButton = ({ color, title, onClick }) => {
    return (
        <div className="p-[4px] flex flex-col flex-shrink grow basis-auto relative">
            <div className="flex flex-col justify-center cursor-pointer">
                <div className={`${ color ? "bg-lime-500 hover:bg-lime-700" : "bg-zinc-200 hover:bg-zinc-300" } h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-xl relative transition-all`} onClick={onClick}>
                    <div className="mx-[3px] flex flex-shrink-0 items-center justify-center relative">
                        <span className={`${ color ? "text-white" : "text-black" } block text-[15px] font-semibold break-words relative leading-5`}>
                            <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                { title }
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendRequestItemButton;