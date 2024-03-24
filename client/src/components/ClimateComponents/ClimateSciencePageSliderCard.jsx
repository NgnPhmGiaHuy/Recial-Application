import { useSliderScroll } from "@/hooks";
import { ClimateSciencePageCardHeader, ClimateSciencePageCardSource, ClimateSciencePageSliderCardItem, MediumNextButton, MediumPrevButton } from "@/components";

const ClimateSciencePageSliderCard = ({ item }) => {
    const { itemRefs, containerRef, scrollLeftVisible, scrollRightVisible, handleScroll } = useSliderScroll();

    return (
        <div>
            <div>
                <div className="w-full flex flex-col flex-shrink-0 relative">
                    <div className="w-full rounded-xl bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] overflow-hidden relative">
                        <div className="flex flex-col grow relative">
                            <ClimateSciencePageCardHeader title={item.title} subtitle={item?.subtitle} onClick=""/>
                            <div className="my-[4px] flex flex-col flex-shrink-0 relative">
                                <div className="flex flex-col relative">
                                    <div ref={containerRef} className="py-[8px] flex flex-col overflow-x-auto overflow-y-hidden overscroll-x-contain no-scrollbar relative">
                                        <div className="px-[16px] flex flex-row grow relative">
                                            { item.item.map((value, index) => (
                                                <ClimateSciencePageSliderCardItem key={index} item={value} ref={(ref) => (itemRefs.current[index] = ref)}/>
                                            )) }
                                        </div>
                                    </div>
                                    { scrollLeftVisible && <MediumPrevButton onClick={() => handleScroll("left")}/> }
                                    { scrollRightVisible && <MediumNextButton onClick={() => handleScroll("right")}/> }
                                </div>
                                { item.source && <ClimateSciencePageCardSource link={item.source.link} source={item.source.title}/> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageSliderCard;