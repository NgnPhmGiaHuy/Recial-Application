import { GroupPageContentBlockAboutDescription, GroupPageContentBlockAboutHistory, GroupPageContentBlockAboutPrivacy } from "@/components";

const GroupPageContentBlockAbout = () => {
    return (
        <div className="mb-[16px]">
            <div className="w-full flex bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden relative">
                <div className="mb-[20px] flex flex-col grow relative">
                    <div className="mb-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="pt-[20px] pb-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                                <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        About this group
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="h-[1px] mx-[16px] mt-[12px] mb-[6px] bg-zinc-400"></div>
                        <div>
                            <div>
                                <GroupPageContentBlockAboutDescription/>
                            </div>
                            <GroupPageContentBlockAboutPrivacy/>
                        </div>
                        <GroupPageContentBlockAboutHistory/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContentBlockAbout;