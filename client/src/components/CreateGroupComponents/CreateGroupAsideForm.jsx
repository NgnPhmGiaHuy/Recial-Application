import {CreateGroupAsideFormPrivacy, CreateGroupAsideFormVisible} from "@/components";

const CreateGroupAsideForm = ({ state, handleState, createGroupActionRef }) => {
    return (
        <section>
            <div className="flex flex-col flex-shrink grow basis-full relative">
                <form action="">
                    <div className={`${(state.inputData.isInputFocused || state.inputData.inputValue) && "focused"} mx-[12px] flex flex-col items-start relative`}>
                        <div className="w-full flex flex-row items-center relative">
                            <input type="text" name="session_group_name" id="session_group_name" required value={state.inputData.inputValue} className={`${(state.inputData.isInputFocused || state.inputData.inputValue) && "pt-[24px]"} w-full h-[56px] p-4 rounded-xl outline outline-1 focus:outline-2 focus:outline-lime-400 transition-all`} onBlur={handleState.handleInputBlur} onFocus={handleState.handleInputFocus} onChange={handleState.handleInputChange}/>
                            <label htmlFor="session_group_name" className={`${state.inputData.isInputFocused || state.inputData.inputValue ? "top-2 left-[16px] text-[10px]" : "top-1/2 left-[12px] text-[16px] transform -translate-y-1/2"} text-gray-600 absolute pointer-events-none transition-all duration-300 ease-in-out`}>
                                Group name
                            </label>
                        </div>
                    </div>
                    <CreateGroupAsideFormPrivacy state={state} handleState={handleState} createGroupPrivacyRef={createGroupActionRef.createGroupPrivacyRef}/>
                    <CreateGroupAsideFormVisible state={state} handleState={handleState} createGroupVisibleRef={createGroupActionRef.createGroupVisibleRef}/>
                </form>
            </div>
        </section>
    );
};

export default CreateGroupAsideForm;
