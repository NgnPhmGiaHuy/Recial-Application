const HeaderNavigationItem = ({itemProps, navigationItem}) => {
    return (
        <li className={`${navigationItem === itemProps.navigationName ? "after:border-b-2 after:border-solid after:border-black after:w-full" : null} w-[112px] flex flex-col items-center`}>
            <a href={itemProps.navigationLink} className={`${navigationItem === itemProps.navigationName ? "text-black" : "text-gray-500"} min-w-[80px] min-h-[52px] flex flex-col items-center justify-center text-center relative bg-transparent hover:text-black transition-all`}>
                <div>
                    {itemProps.navigationIcon}
                </div>
                <span className="text-[12px] text-center leading-normal font-normal">{itemProps.navigationTitle}</span>
            </a>
        </li>
    );
};

export default HeaderNavigationItem;