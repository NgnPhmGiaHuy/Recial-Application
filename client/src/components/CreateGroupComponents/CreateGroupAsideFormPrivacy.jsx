import { useDispatch, useSelector } from "react-redux";

import { toggleGroupPrivacy } from "@/store/actions/toggle/toggleActions";
import { ChevronDownIcon, CreateGroupAsideFormPrivacyMenu, GlobeAltIcon, LockClosedIcon } from "@/components";

const CreateGroupAsideFormPrivacy = ({ state, handleState, createGroupPrivacyRef}) => {
    const dispatch = useDispatch();
    const { showGroupPrivacy } = useSelector(state => state.toggle);

    const handleGroupPrivacySettingButton = () => {
        return dispatch(toggleGroupPrivacy());
    }

    return (
        <>
            <div ref={createGroupPrivacyRef} className="mx-[12px] my-[12px] flex flex-col items-start  relative">
                <div className="w-full h-full cursor-pointer relative" onClick={handleGroupPrivacySettingButton}>
                    <div className="w-full h-[56px] px-4 flex flex-row items-center justify-between rounded-xl outline outline-1 focus:outline-2 focus:outline-lime-400 transition-all relative">
                        <div className="flex flex-shrink-0 relative">
                            <div className="w-[32px] h-[32px] flex items-center justify-center relative overflow-hidden">
                                { state.groupPrivacy.toLowerCase() === "public" ? (
                                    <GlobeAltIcon fill="none" stroke="currentColor" width={28} height={28} />
                                ) : (
                                    <LockClosedIcon fill="none" stroke="currentColor" width={28} height={28} />
                                ) }
                            </div>
                        </div>
                        <div className="w-full flex flex-col flex-shrink relative">
                            <div className="w-full h-full my-[-20px] px-[12px]">
                                <div className="my-[-5px]">
                                    <span className="text-[12px] text-lime-500 text-left font-normal break-words relative leading-5">
                                        Choose Privacy
                                    </span>
                                </div>
                                <div className="my-[-5px]">
                                    <span className="text-[18px] text-black text-left font-normal break-words relative leading-5">
                                        { state.groupPrivacy }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-shrink-0 relative">
                            <div className="w-[32px] h-[32px] flex items-center justify-center relative overflow-hidden">
                                <ChevronDownIcon fill="none" stroke="currentColor" width={12} height={12} />
                            </div>
                        </div>
                    </div>
                </div>
                { showGroupPrivacy && <CreateGroupAsideFormPrivacyMenu groupPrivacy={state.groupPrivacy} handleSetGroupPrivacy={handleState.handleSetGroupPrivacy}/> }
            </div>
            <div className="mx-[12px] my-[4px]">
                <span className="block text-[12px] text-zinc-500 text-left font-normal break-words relative leading-4">
                    <span className="overflow-hidden relative">
                        { state.groupPrivacy.toLowerCase() === "public" ? "Anyone can see who's in the group and what they post. You can change your group to private now or at a later time" : "Only members can see who’s in the group and what they post. You can’t change this group to public later." }
                    </span>
                </span>
            </div>
        </>
    );
};

export default CreateGroupAsideFormPrivacy;