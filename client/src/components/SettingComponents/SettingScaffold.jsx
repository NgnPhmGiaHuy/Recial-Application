import {SettingScaffoldItem} from "@/components";

const SettingScaffold = ({settingProps}) => {
    return (
        <div className="max-w-[780px] mx-auto mt-[16px]">
            <div className="bg-[#F3F2EF]">
                <ul>
                    <li className="mb-[16px] rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden">
                        <div className="px-[24px] pt-[16px] pb-[8px] bg-white">
                            <div>
                                <span className="text-[20px] text-black text-left font-semibold break-words relative leading-6">
                                    <span className="overflow-hidden relative">
                                        {settingProps.itemTitle}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <ul className="relative">
                            {settingProps.itemProps.map((value, index) => (
                                <SettingScaffoldItem key={index} settingProps={value} isBorderBottom={index !== settingProps.itemProps.length - 1}/>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SettingScaffold;