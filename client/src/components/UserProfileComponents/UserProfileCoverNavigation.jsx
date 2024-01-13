import { UserProfileCoverNavigationItem } from "@/components";

const UserProfileCoverNavigation = ({ userProps }) => {
    const userProfileCoverNavigationItemList = [
        {
            link: `/${userProps?.user?._id}`,
            title: "Post"
        },
        {
            link: `/${userProps?.user?._id}/about`,
            title: "About"
        },
        {
            link: `/${userProps?.user?._id}/friends`,
            title: "Friends"
        },
        {
            link: `/${userProps?.user?._id}/photos`,
            title: "Photos"
        },
        {
            link: `/${userProps?.user?._id}/videos`,
            title: "Videos"
        },
        {
            link: `/${userProps?.user?._id}/groups`,
            title: "Groups"
        },
        {
            link: `/${userProps?.user?._id}/articles`,
            title: "Articles"
        },
    ]

    return (
        <nav className="flex flex-row items-center justify-start relative border-t border-solid border-zinc-200">
            <ul className="flex flex-row items-center relative">
                {userProfileCoverNavigationItemList.map((value, index) => (
                    <UserProfileCoverNavigationItem key={index} itemProps={value}/>
                ))}
                <li className="ml-[6px] flex flex-col relative">
                     <div className="px-[16px] py-[12px] flex flex-row items-center cursor-pointer rounded-md gap-2 text-zinc-500 relative hover:text-black hover:bg-zinc-100 transition-all">
                         <span className="text-[16px] text-left font-bold break-words leading-6 relative">
                             <span className="overflow-hidden relative">
                                 More
                             </span>
                         </span>
                         <i>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                             </svg>
                         </i>
                     </div>
                </li>
            </ul>
        </nav>
    );
};

export default UserProfileCoverNavigation;