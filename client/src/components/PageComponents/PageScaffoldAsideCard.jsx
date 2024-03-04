import { PageScaffoldAsideCardItem } from "@/components";

const PageScaffoldAsideCard = ({ cardName, cardList }) => {
    return (
        <section className="w-full h-full">
            <div className="my-[12px] flex flex-col bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative overflow-hidden">
                <div className="pt-[20px] pb-[4px] flex flex-col relative">
                    <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                            <div className="before:w-[3px] before:h-full before:left-[-16px] before:rounded-md before:bg-lime-500 before:absolute">
                                <span className="text-[20px] text-black font-bold break-words relative leading-6">
                                    <span className="overflow-hidden relative">
                                        {cardName}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-[8px]">
                    <div className="px-[8px] flex flex-nowrap items-stretch justify-between relative">
                        <div className="p-[8px] flex flex-col flex-shrink grow basis-0 relative">
                            <ul>
                                {cardList.map((value, index) => (
                                    <PageScaffoldAsideCardItem key={index} icon={value?.icon} title={value?.title} handleAction={value?.handleAction}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageScaffoldAsideCard;