import { PageCoverNavigationItem } from "@/components";
import { pageCoverNavigationConstants } from "@/constants/PageConstants/PageCoverNavigationConstants";

const PageCoverNavigation = () => {
    return (
        <nav className="w-full mt-[8px] flex flex-row items-center justify-start relative">
            <div className="w-full flex flex-row items-center justify-between relative">
                <ul className="flex flex-row items-center justify-center gap-2 relative">
                    {pageCoverNavigationConstants.slice(0, pageCoverNavigationConstants.length / 2).map((value, index) => (
                        <PageCoverNavigationItem key={index} itemProps={value}/>
                    ))}
                </ul>
                <ul className="flex flex-row items-center justify-center gap-2 relative">
                    {pageCoverNavigationConstants.slice(pageCoverNavigationConstants.length/2, pageCoverNavigationConstants.length).map((value, index) => (
                        <PageCoverNavigationItem key={index} itemProps={value}/>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default PageCoverNavigation;