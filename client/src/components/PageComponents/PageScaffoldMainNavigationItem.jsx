import Link from "next/link";

const PageScaffoldMainNavigationItem = ({ title, active}) => {
    return (
        <div className={`${active ? "text-lime-500 border-lime-500" : "text-zinc-500 border-zinc-200 hover:border-black hover:text-black"} min-w-[100px] flex flex-col items-center bg-white rounded-xl border border-solid transition-all`}>
            <Link href="" replace={true}>
                <div className="px-[16px] py-[4px] flex flex-row items-center relative transition-all">
                    <span className="text-[16px] text-left font-normal  break-words leading-6 relative">
                        <span className="overflow-hidden relative">
                            {title}
                        </span>
                    </span>
                </div>
            </Link>
        </div>
    )
};

export default PageScaffoldMainNavigationItem;