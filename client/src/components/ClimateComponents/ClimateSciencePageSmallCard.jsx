import { ClimateSciencePageSmallCardItem, ClimateSciencePageCardHeader, ClimateSciencePageCardSource } from "@/components";

const ClimateSciencePageSmallCard = ({ item }) => {
    return (
        <div>
            <div className="w-full flex flex-col flex-shrink-0 relative">
                <div className="w-full rounded-xl bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] overflow-hidden relative">
                    <div className="flex flex-col grow relative">
                        <ClimateSciencePageCardHeader title={item.title} onClick=""/>
                        <div className="my-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="flex flex-col relative">
                                {item.item.map((value, index) => (
                                    <ClimateSciencePageSmallCardItem key={index} item={value}/>
                                ))}
                            </div>
                            { item.source && <ClimateSciencePageCardSource link={item.source.link} source={item.source.title}/> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageSmallCard;