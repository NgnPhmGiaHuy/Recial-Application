import { AsideItem } from "@/components";
import { asideLandingConstants } from "@/constants/AsideConstants/asideLandingConstants";

const AsideNavigation = () => {
    return (
        <div>
            <ul>
                {asideLandingConstants.map((value, index) => (
                    <AsideItem key={index} userProps={value}/>
                ))}
            </ul>
        </div>
    );
};

export default AsideNavigation;