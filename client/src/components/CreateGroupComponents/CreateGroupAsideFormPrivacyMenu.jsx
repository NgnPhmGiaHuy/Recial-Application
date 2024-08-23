import Link from "next/link";
import { CreateGroupAsideFormPrivacyMenuItem } from "@/components";

import CREATE_GROUP_FORM_VISIBLE from "@/constants/CreateGroupConstants/CreateGroupFormVisibleConstants";
import CREATE_GROUP_FORM_PRIVACY from "@/constants/CreateGroupConstants/CreateGroupFormPrivacyConstants";

const CreateGroupAsideFormPrivacyMenu = ({ groupPrivacy, groupVisible, handleSetGroupPrivacy, handleSetGroupVisible }) => {
    return (
        <div className="my-[12px] left-0 top-[56px] absolute z-10">
            <div className="pt-[4px] pb-[12px] flex flex-col bg-white shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px] rounded-xl overflow-hidden relative">
                <div>
                    {groupPrivacy && CREATE_GROUP_FORM_PRIVACY.map((value, index) => (
                        <CreateGroupAsideFormPrivacyMenuItem key={index} icon={value.icon} title={value.title} subtitle={value.subtitle} groupPrivacy={groupPrivacy} handleSetGroupPrivacy={handleSetGroupPrivacy}/>
                    ))}

                    {groupVisible && CREATE_GROUP_FORM_VISIBLE.map((value, index) => (
                        <CreateGroupAsideFormPrivacyMenuItem key={index} icon={value.icon} title={value.title} subtitle={value.subtitle} groupVisible={groupVisible} handleSetGroupVisible={handleSetGroupVisible}/>
                    ))}
                </div>
                {groupPrivacy && (
                    <>
                        <div className="mx-[12px] mt-[4px] mb-[12px] h-[1px] bg-zinc-300"></div>
                        <div className="mx-[12px] flex flex-row items-start justify-start relative">
                            <div>
                                <span className="block text-[12px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Learn more about &nbsp;
                                    </span>
                                </span>
                            </div>
                            <div>
                                <Link href="">
                                    <span className="block text-[12px] text-lime-500 text-left font-normal break-words relative leading-5 hover:underline transition-all">
                                        Learn more about
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateGroupAsideFormPrivacyMenu;