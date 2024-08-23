import { EyeIcon, EyeSlashIcon, GlobeAltIcon, LockClosedIcon } from "@/components";

const CreateGroupReviewAboutCard = ({ groupPrivacy, groupVisible }) => {
    return (
        <div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row items-center relative">
                    <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            { groupPrivacy?.toLowerCase() === "public" ? (
                                <GlobeAltIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) : groupPrivacy?.toLowerCase() === "private" ? (
                                <LockClosedIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) : groupVisible?.toLowerCase() === "visible" ? (
                                <EyeIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) : groupVisible?.toLowerCase() === "hidden" ? (
                                <EyeSlashIcon fill="none" stroke="currentColor" width={16} height={16} />
                            ) : null }
                        </div>
                    </div>
                    <div className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col relative">
                            <div>
                                <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                    { groupPrivacy || groupVisible }
                                </span>
                            </div>
                            <div>
                                <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        { groupPrivacy?.toLowerCase() === "public" ? "Anyone can see who's in the group and what they post." : groupPrivacy?.toLowerCase() === "private" ? "Only members can see who's in the group and what they post." : groupVisible?.toLowerCase() === "visible" ? "Anyone can find this group." :  groupVisible?.toLowerCase() === "hidden" ? "This group is not discoverable by everyone." : null }
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewAboutCard;