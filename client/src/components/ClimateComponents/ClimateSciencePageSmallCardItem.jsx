const ClimateSciencePageSmallCardItem = ({ item }) => {
    return (
        <div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="min-w-[32px] w-[32px] h-[32px] my-[6px] mr-[12px] flex items-center justify-center relative">
                    <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                        { item.icon }
                    </div>
                </div>
                <div className="py-[8px] flex flex-row flex-shrink grow items-center justify-between relative">
                    <div className="my-[4px]">
                        <span className="block text-[12px] text-black text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                { item.label }
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClimateSciencePageSmallCardItem;