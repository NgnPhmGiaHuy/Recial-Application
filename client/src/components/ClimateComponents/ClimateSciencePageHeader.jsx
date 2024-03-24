import Image from "next/image";

import { ClimateSciencePageHeaderContent } from "@/components";

import ClimateIllustration01 from "/public/images/Illustration/Climate/climate-bg-00001.png";

const ClimateSciencePageHeader = () => {
    return (
        <div className="flex flex-row flex-nowrap items-stretch justify-center relative">
            <div className="flex flex-col flex-shrink grow relative">
                <div className="w-full h-full relative">
                    <div className="flex flex-row flex-nowrap items-stretch justify-center relative">
                        <div className="inset-0 overflow-hidden absolute">
                            <div className="w-full h-0 top-0 left-[50%] pt-[50%] -translate-x-1/2 opacity-10 blur-lg absolute">
                                <div className="inset-0 flex flex-col absolute">
                                    <div className="w-full h-full relative">
                                        <Image src={ClimateIllustration01} alt={`${ClimateIllustration01}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[1250px] w-full flex flex-col flex-shrink grow items-center justify-center overflow-hidden relative">
                            <div className="w-full h-full rounded-xl overflow-hidden absolute">
                                <div className="w-full h-full overflow-hidden relative">
                                    <div className="inset-0 flex flex-col absolute">
                                        <div className="w-full h-full relative">
                                            <Image src={ClimateIllustration01} alt={`${ClimateIllustration01}-image`}
                                                   fill={true} sizes="(max-width: 768px) 100vw"
                                                   className="object-cover"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ClimateSciencePageHeaderContent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ClimateSciencePageHeader;