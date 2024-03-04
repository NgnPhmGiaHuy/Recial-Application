import { PageScaffoldAsideCard, PageScaffoldAsideHeader, PageScaffoldAsideSecurityCard } from "@/components";
import { aboutCardConstants, communityCardConstants } from "@/constants/PageConstants/pageScaffoldAsideConstants";

const PageScaffoldAside = () => {
    return (
        <div className="w-[320px] mx-[12px] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
            <div className="top-[132px] sticky">
                <PageScaffoldAsideHeader/>
                <div className="w-full flex flex-col items-center justify-center relative">
                    <PageScaffoldAsideCard cardName="Community" cardList={communityCardConstants}/>
                    <PageScaffoldAsideCard cardName="About" cardList={aboutCardConstants}/>
                    <PageScaffoldAsideSecurityCard/>
                </div>
            </div>
        </div>
    );
};

export default PageScaffoldAside;