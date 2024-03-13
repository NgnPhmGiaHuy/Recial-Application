"use client"

import { useGroupCreateAction, useUserData, useWithAuth } from "@/hooks";
import { CreateGroupAside, CreateGroupReview, Header} from "@/components";

const CreateGroupPage = () => {
    const { userProps } = useUserData();
    const { createGroupActionRef, state, handleState } = useGroupCreateAction();

    return (
        userProps && (
            <>
                <div>
                    <Header/>
                    <div className="flex flex-col relative">
                        <div className="flex flex-col relative z-0 ">
                            <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                                <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                    <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                        <div className="w-[calc(380px+12px)] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                            <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                                <CreateGroupAside state={state} handleState={handleState} createGroupActionRef={createGroupActionRef}/>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                                            <CreateGroupReview state={state}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default useWithAuth(CreateGroupPage);