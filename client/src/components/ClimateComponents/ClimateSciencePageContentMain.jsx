import { ClimateSciencePageMediumCard, ClimateSciencePageSliderCard, ClimateSciencePageSmallCard } from "@/components";

import { ACTION_AGAINST_CLIMATE_CHANGE, CLIMATE_FACT, IPCC_REPORT, IPCC_UPDATE, ONE_FIVE_DEGREE_EXPLAINED } from "@/constants/ClimateScienceConstants/ClimateSciencePageContentMainConstants";

const ClimateSciencePageContentMain = () => {
    return (
        <div>
            <div className="max-w-[680px] min-w-[500px] m-[8px] flex flex-shrink grow-[25] basis-[500px] relative">
                <div className="w-full flex flex-col gap-4 relative">
                    <ClimateSciencePageSmallCard item={IPCC_UPDATE}/>
                    <ClimateSciencePageMediumCard item={CLIMATE_FACT}/>
                    <ClimateSciencePageSmallCard item={IPCC_REPORT}/>
                    <ClimateSciencePageSliderCard item={ONE_FIVE_DEGREE_EXPLAINED}/>
                    <ClimateSciencePageSliderCard item={ACTION_AGAINST_CLIMATE_CHANGE}/>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageContentMain;