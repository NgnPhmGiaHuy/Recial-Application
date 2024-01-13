import Link from "next/link";

const UserProfileCoverNavigationItem = ({ itemProps }) => {
    const url = document.URL || window.location.href;
    const active = url === process.env.NEXT_PUBLIC_CLIENT_URL + itemProps.link;

    return (
        <li className={`${active ? "after:w-full after:h-[3px] after:rounded-md after:bg-lime-300 after:bottom-[-3px] after:relative" : "hover:bg-zinc-100"} ml-[6px] my-[-8px] flex flex-col rounded-md items-center transition-all`}>
            <Link href={itemProps.link} replace={true} className={`${active ? "text-lime-500" : "text-zinc-500 hover:text-black"} px-[16px] py-[8px] flex flex-row items-center relative transition-all`}>
                <span className="text-[16px] text-left font-bold break-words leading-6 relative">
                    <span className="overflow-hidden relative">
                        {itemProps.title}
                    </span>
                </span>
            </Link>
        </li>
    )
}

export default UserProfileCoverNavigationItem;