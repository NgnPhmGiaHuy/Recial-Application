import { useDispatch, useSelector } from "react-redux";

import { toggleGroupVisible } from "@/store/actions/toggle/toggleActions";
import { ChevronDownIcon, CreateGroupAsideFormPrivacyMenu, EyeIcon, EyeSlashIcon } from "@/components";

const CreateGroupAsideFormVisible = ({ state, handleState, createGroupVisibleRef }) => {
    const dispatch = useDispatch();

    const { showGroupVisible } = useSelector(state => state.toggle);

    const handleGroupVisibleSettingButton = () => {
        return dispatch(toggleGroupVisible());
    }

    return (
        <div ref={createGroupVisibleRef} className="mx-[12px] my-[12px] flex flex-col items-start  relative">
            <div className="w-full h-full cursor-pointer relative" onClick={handleGroupVisibleSettingButton}>
                <div className="w-full h-[56px] px-4 flex flex-row items-center justify-between rounded-xl outline outline-1 focus:outline-2 focus:outline-lime-400 transition-all relative">
                    <div className="flex flex-shrink-0 relative">
                        <div className="w-[32px] h-[32px] flex items-center justify-center relative overflow-hidden">
                            { state.groupVisible.toLowerCase() === "visible" ? (
                                <EyeIcon fill="none" stroke="currentColor" width={28} height={28} />
                            ) : (
                                <EyeSlashIcon fill="none" stroke="currentColor" width={28} height={28} />
                            ) }
                        </div>
                    </div>
                    <div className="w-full flex flex-col flex-shrink relative">
                        <div className="w-full h-full my-[-20px] px-[12px]">
                            <div className="my-[-5px]">
                                <span className="text-[12px] text-lime-500 text-left font-normal break-words relative leading-5">
                                    Visibility
                                </span>
                            </div>
                            <div className="my-[-5px]">
                                <span className="text-[18px] text-black text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        { state.groupVisible }
                                    </span>
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
            { showGroupVisible && <CreateGroupAsideFormPrivacyMenu groupVisible={state.groupVisible} handleSetGroupVisible={handleState.handleSetGroupVisible}/> }
        </div>
    );
};

export default CreateGroupAsideFormVisible;