import { ClimateSciencePageCardHeader, ClimateSciencePageMediumCardItem, GrayButton } from "@/components";

const ClimateSciencePageMediumCard = ({ item }) => {
    return (
        <div>
            <div className="w-full flex flex-col flex-shrink-0 relative">
                <div className="w-full rounded-xl bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] overflow-hidden relative">
                    <div className="flex flex-col grow relative">
                        <ClimateSciencePageCardHeader title={item.title} subtitle={item.subtitle} onClick=""/>
                        <div className="my-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="flex flex-col relative">
                                {item.item.map((value, index) => (
                                    <ClimateSciencePageMediumCardItem key={index} item={value}/>
                                ))}
                            </div>
                            <div className="px-[16px] pt-[16px] pb-[8px]">
                                <GrayButton title="See all" onClick=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageMediumCard;