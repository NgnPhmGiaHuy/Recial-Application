import { CreateGroupReviewAboutCard } from "@/components";

const CreateGroupReviewAbout = ({ state }) => {
    return (
        <div className="max-w-[360px] w-full mb-[16px] flex relative">
            <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden">
                <div className="pb-[16px] flex flex-col opacity-50 relative">
                    <div className="flex flex-col grow relative">
                        <div className="mb-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="pt-[20px] pb-[4px] flex flex-col flex-shrink-0 relative">
                                <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                                    <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            About
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[4px] flex flex-col flex-shrink-0 relative">
                            <CreateGroupReviewAboutCard groupPrivacy={state.groupPrivacy}/>
                            <CreateGroupReviewAboutCard groupVisible={state.groupVisible}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewAbout;