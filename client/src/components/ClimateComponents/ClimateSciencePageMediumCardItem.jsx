import Link from "next/link";

const ClimateSciencePageMediumCardItem = ({ item }) => {
    return (
        <div>
            <div className="flex flex-col flex-shrink-0 relative">
                <Link href="">
                    <div className="px-[8px] py-[12px] flex flex-row flex-shrink-0 basis-auto items-stretch justify-between relative">
                        <div className="max-w-[56px] ml-[8px] mr-[12px]">
                            <div className="w-[56px] h-[56px] flex items-center justify-center relative">
                                <i>
                                    {item.icon}
                                </i>
                            </div>
                        </div>
                        <div className="py-[8px] flex flex-row flex-shrink grow items-center justify-between relative">
                            <div className="my-[4px]">
                                <span
                                    className="block text-[16px] text-black text-left font-bold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {item.label}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ClimateSciencePageMediumCardItem;