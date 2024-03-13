import { useDispatch, useSelector } from "react-redux";

import { CreateGroupAsideFormPrivacyMenu } from "@/components";
import { toggleGroupVisible } from "@/store/actions/toggle/toggleActions";

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
                            <i>
                                {state.groupVisible.toLowerCase() === "visible" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
                                    </svg>
                                )}
                            </i>
                        </div>
                    </div>
                    <div className="w-full flex flex-col flex-shrink relative">
                        <div className="w-full h-full my-[-20px] px-[12px]">
                            <div className="my-[-5px]">
                                <span
                                    className="text-[12px] text-lime-500 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Visibility
                                    </span>
                                </span>
                            </div>
                            <div className="my-[-5px]">
                                <span className="text-[18px] text-black text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {state.groupVisible}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 relative">
                        <div className="w-[32px] h-[32px] flex items-center justify-center relative overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            { showGroupVisible && <CreateGroupAsideFormPrivacyMenu groupVisible={state.groupVisible} handleSetGroupVisible={handleState.handleSetGroupVisible}/> }
        </div>
    );
};

export default CreateGroupAsideFormVisible;