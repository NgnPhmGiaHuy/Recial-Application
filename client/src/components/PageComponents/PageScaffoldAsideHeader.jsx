import { EllipsisVerticalIcon } from "@/components";

const PageScaffoldAsideHeader = () => {
    return (
        <div className="px-[16px] py-[12px] flex flex-col relative rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden">
            <div className="flex items-center justify-center relative">
                <div className="w-full h-full flex flex-row items-center justify-between relative">
                    <div className="px-[6px]">
                        <span className="block text-[16px] text-black text-left font-medium break-words relative leading-5">
                            Info
                        </span>
                    </div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer overflow-hidden relative">
                        <EllipsisVerticalIcon fill="none" stroke="currentColor" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageScaffoldAsideHeader;