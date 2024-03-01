import { CreateGroupAsideForm, CreateGroupAsideFormSubmit, CreateGroupAsideHeader, CreateGroupAsideUserRole } from "@/components";

const CreateGroupAside = ({ userProps, state, handleState, createGroupPrivacyRef, createGroupVisibleRef }) => {
    return (
        <div className="my-[16px] ml-[12px] w-[380px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[380px] bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-y-auto no-scrollbar rounded-xl">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="mt-[16px] p-[8px] flex flex-col grow relative">
                        <div className="flex flex-shrink-0 flex-nowrap">
                            <CreateGroupAsideHeader/>
                        </div>
                        <div className="flex flex-col flex-shrink grow relative">
                            <div className="flex flex-col grow relative">
                                <CreateGroupAsideUserRole userProps={userProps}/>
                                <CreateGroupAsideForm state={state} handleState={handleState} createGroupPrivacyRef={createGroupPrivacyRef} createGroupVisibleRef={createGroupVisibleRef}/>
                            </div>
                        </div>
                        <div className="pb-[16px]">
                            <CreateGroupAsideFormSubmit state={state}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupAside;