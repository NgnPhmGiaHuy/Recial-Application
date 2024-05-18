import { shallowEqual, useSelector } from "react-redux";

import { UserProfileCoverNavigationItem } from "@/components";

import USER_PROFILE_COVER_NAVIGATION from "@/constants/UserProfileConstants/UserProfileCoverNavigationConstants";


const UserProfileCoverNavigation = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    const userProfileCoverNavigationItemList = USER_PROFILE_COVER_NAVIGATION(userProps);

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