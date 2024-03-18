import { useSelector } from "react-redux";

const GroupPageContentBlockAboutDescription = () => {
    const groupProps = useSelector(state => state.group);

    return (
        <div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                    <div className="flex flex-col relative">
                        <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {groupProps?.profile?.group_description}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContentBlockAboutDescription;