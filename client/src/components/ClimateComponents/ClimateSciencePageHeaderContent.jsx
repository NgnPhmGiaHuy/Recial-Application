import Image from "next/image";

import { IconButton, MediumFollowButton } from "@/components";

import InfoIcon01 from "/public/images/Icon/info-0001.svg";
import ShareIcon01 from "/public/images/Icon/share-0001.svg";
import ClimateIcon01 from "/public/images/Icon/climate-0001.png";

const ClimateSciencePageHeaderContent = () => {
    return (
        <div className="w-full px-[30px] pt-[186px] pb-[34px]">
            <div className="w-full min-h-[135px] flex items-end justify-between relative">
                <div className="flex flex-row flex-shrink flex-nowrap items-center justify-between relative">
                    <div className="flex flex-col flex-shrink-0 relative">
                        <div className="max-w-[600px]">
                        <span
                            className="block text-[28px] text-black text-left font-bold break-words relative leading-6">
                            Climate Science Center
                        </span>
                        </div>
                    </div>
                    <div className="flex flex-col flex-shrink-0 relative">
                        <div className="w-[72px] h-[72px] flex items-center justify-center relative">
                            <Image src={ClimateIcon01} alt={`${ClimateIcon01}-image`} fill={true}
                                   sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="pl-[16px] flex flex-row items-end gap-2 relative">
                    <MediumFollowButton/>
                    <IconButton icon={ShareIcon01} tooltip={{id: "share-button", content: "Share"}}/>
                    <IconButton icon={InfoIcon01} tooltip={{id: "info-button", content: "More info"}}/>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageHeaderContent;