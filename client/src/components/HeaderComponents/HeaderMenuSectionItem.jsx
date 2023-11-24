import Image from "next/image";

const HeaderMenuSectionItem = ({sectionItemData}) => {
    return (
        <li className="w-[25%] pt-[4px] mb-[8px] flex flex-col items-center justify-center text-center align-top hyphens-auto group">
            <a href={sectionItemData.sectionItemLink} className="flex flex-col items-center justify-center pt-[4px] text-[16px] font-semibold">
                <div
                    className="w-[60px] h-[60px] flex flex-col items-center justify-center rounded-md border border-solid border-gray-200 transform-none group-hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all ease-in-out duration-150 relative">
                    <Image src={sectionItemData.sectionItemIcon} alt={`${sectionItemData.sectionItemIcon}-image`} width={40} height={40}
                           className="object-contain"/>
                </div>
                <div className="flex flex-col mt-[6px]">
                    <span className="flex flex-row text-[12px] font-normal text-gray-500 break-words leading-4">
                        {sectionItemData.sectionItemTitle}
                    </span>
                </div>
            </a>
        </li>
    )
}

export default HeaderMenuSectionItem;