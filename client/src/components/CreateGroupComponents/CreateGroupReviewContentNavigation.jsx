import { CreateGroupReviewContentNavigationItem } from "@/components";

const CreateGroupReviewContentNavigation = () => {
    const navigationName = ["About", "Posts", "Member", "Events"];

    return (
        <div>
            <div className="flex flex-row items-stretch flex-nowrap shadow-md relative">
                <div className="max-w-[980px] px-[16px] flex flex-shrink grow basis-0 relative">
                    <div className="mx-[-4px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-between relative">
                        <div className="px-[4px] flex flex-col flex-shrink grow basis-0 cursor-not-allowed relative">
                            <div className="w-full h-[52px] overflow-hidden relative">
                                <div className="w-full h-full flex flex-row items-center justify-start relative">
                                    {navigationName.map((value, index) => (
                                        <CreateGroupReviewContentNavigationItem key={index} name={value}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewContentNavigation;