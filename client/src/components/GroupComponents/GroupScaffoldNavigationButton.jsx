import Link from "next/link";

const GroupScaffoldNavigationButton = ({ buttonProps }) => {
    return (
        <Link href={buttonProps.link} className="group relative">
            <div className={`${buttonProps.active && "after:w-full after:h-[3px] after:absolute after:bottom-0 after:left-0 after:bg-lime-500"} h-[60px] min-h-[16px] px-[16px] inline-flex items-center float-left relative`}>
                 <span className={`${buttonProps.active ? "text-lime-500" : "text-zinc-600"} block text-[15px] text-center font-semibold break-words relative leading-5 transition-all z-10`}>
                     <span className="overflow-hidden relative">
                         {buttonProps.title}
                     </span>
                 </span>
            </div>
            {!buttonProps.active && (
                <div className="inset-1 rounded-md bg-transparent group-hover:bg-zinc-200 opacity-0 group-hover:opacity-50 absolute transition-all"></div>
            )}
        </Link>
    )
};

export default GroupScaffoldNavigationButton;