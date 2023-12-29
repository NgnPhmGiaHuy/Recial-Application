const AsideSettingItem = ({ itemProps, navigationProps }) => {
    return (
        <li>
            <a href={itemProps.itemLink}>
                <div className={`${navigationProps === itemProps.itemNavigation ? "text-lime-500 before:w-[2px] before:h-[48px] before:left-0 before:absolute before:bg-lime-500" : "text-black"} lg:p-[24px] px-[12px] py-[24px] flex items-center bg-white`}>
                    <div className="lg:mr-[16px]">
                        <div className="w-[24px] h-[24px] overflow-hidden relative">
                            <i>
                                {itemProps.itemImage}
                            </i>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <span className="text-[20px] text-left font-semibold break-words relative leading-6">
                            <span className="overflow-hidden relative">
                                {itemProps.itemTitle}
                            </span>
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default AsideSettingItem;