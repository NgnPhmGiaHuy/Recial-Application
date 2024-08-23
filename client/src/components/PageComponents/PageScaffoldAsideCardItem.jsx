const PageScaffoldAsideCardItem = ({ icon, title, handleAction }) => {
    return (
        <li>
            <div className="py-[8px] flex flex-row flex-nowrap items-center justify-between gap-3 relative">
                <div className="flex flex-col flex-shrink-0 relative">
                    <div className="w-[24px] h-[24px] flex flex-row items-center justify-center overflow-hidden relative">
                        { icon }
                    </div>
                </div>
                <div className="flex flex-col flex-shrink grow self-center basis-0 relative">
                    {title && (
                        <span className="block text-[14px] text-black text-left font-normal break-words relative leading-5">
                            <span>
                                {title}
                            </span>
                        </span>
                    )}
                    {handleAction && (
                        <span className="block text-[14px] text-black text-left font-semibold break-words cursor-pointer relative leading-5" onClick={handleAction.onClick}>
                            <span>
                                {handleAction.title}
                            </span>
                        </span>
                    )}
                </div>
            </div>
        </li>
    );
};

export default PageScaffoldAsideCardItem;