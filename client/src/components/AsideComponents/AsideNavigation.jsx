import { AsideItem } from "@/components";

import ASIDE_LANDING from "@/constants/AsideConstants/AsideLandingConstants";

const AsideNavigation = () => {
    return (
        <div>
            <ul>
                { ASIDE_LANDING.map((value, index) => (
                    <AsideItem key={index} userProps={value}/>
                )) }
            </ul>
        </div>
    );
};

export default AsideNavigation;