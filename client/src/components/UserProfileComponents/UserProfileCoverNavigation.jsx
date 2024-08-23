import { shallowEqual, useSelector } from "react-redux";

import { ChevronDownIcon, UserProfileCoverNavigationItem } from "@/components";

import USER_PROFILE_COVER_NAVIGATION from "@/constants/UserProfileConstants/UserProfileCoverNavigation";

const UserProfileCoverNavigation = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    const navItems = USER_PROFILE_COVER_NAVIGATION(userProps);

    return (
        <nav className="flex flex-row items-center justify-start relative border-t border-solid border-zinc-200">
            <ul className="flex flex-row items-center relative">
                { navItems.map((value, index) => (
                    <UserProfileCoverNavigationItem key={index} itemProps={value}/>
                )) }
                <li className="ml-[6px] flex flex-col relative">
                     <div className="px-[16px] py-[12px] flex flex-row items-center cursor-pointer rounded-md gap-2 text-zinc-500 relative hover:text-black hover:bg-zinc-100 transition-all">
                         <span className="text-[16px] text-left font-bold break-words leading-6 relative">
                             <span className="overflow-hidden relative">
                                 More
                             </span>
                         </span>
                         <ChevronDownIcon fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14} />
                     </div>
                </li>
            </ul>
        </nav>
    );
};

export default UserProfileCoverNavigation;