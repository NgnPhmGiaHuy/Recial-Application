import { GroupPageContentBlockAbout, GroupPageContentBlockMember, GroupPageContentBlockActivity } from "@/components";

const GroupPageContentBlock = () => {
    return (
        <div className="flex flex-col grow relative">
            <div className="min-h-[calc(100vh-133px)] my-[20px] self-center">
                <div className="w-full m-[-8px] flex flex-row flex-wrap items-stretch justify-center relative">
                    <div className="max-w-[680px] m-[8px] flex-shrink grow-[25] basis-[500px]">
                        <GroupPageContentBlockAbout/>
                        <GroupPageContentBlockMember/>
                        <GroupPageContentBlockActivity/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContentBlock;