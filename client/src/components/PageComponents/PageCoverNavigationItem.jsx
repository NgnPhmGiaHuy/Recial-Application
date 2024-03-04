import Link from "next/link";

const PageCoverNavigationItem = ({ itemProps }) => {
    const url = document.URL || window.location.href;

    return (
        <li className="min-w-[140px] flex flex-col items-center bg-white rounded-xl text-zinc-500 border border-solid border-zinc-200 hover:border-black hover:text-black transition-all">
            <Link href={itemProps.link} replace={true} className="px-[16px] py-[8px] flex flex-row items-center relative transition-all">
                <span className="text-[16px] text-left font-normal  break-words leading-6 relative">
                    <span className="overflow-hidden relative">
                        {itemProps.title}
                    </span>
                </span>
            </Link>
        </li>
    )
};

export default PageCoverNavigationItem;