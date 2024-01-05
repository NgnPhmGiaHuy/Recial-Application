import { UserProfileEditInputItem } from "@/components";

const UserProfileEditInput = ({ formData, handleFormChange }) => {
    return (
        <>
            <div>
                <UserProfileEditInputItem title="Username*" inputName="session_username"
                                          formData={formData.session_username} handleFormChange={handleFormChange}
                                          required={true}/>
            </div>
            <div>
                <UserProfileEditInputItem title="First name*" inputName="session_firstname"
                                          formData={formData.session_firstname} handleFormChange={handleFormChange}
                                          required={true}/>
            </div>
            <div>
                <UserProfileEditInputItem title="Last name" inputName="session_lastname"
                                          formData={formData.session_lastname} handleFormChange={handleFormChange}/>
            </div>
            <div>
                <UserProfileEditInputItem title="Description" inputName="session_description"
                                          formData={formData.session_description} handleFormChange={handleFormChange}
                                          textarea={true}/>
            </div>
            <div>
                <UserProfileEditInputItem title="Location" inputName="session_location"
                                          formData={formData.session_location} handleFormChange={handleFormChange}/>
            </div>
            <div>
                <div className="p-[16px] flex flex-col relative">
                    <div className="flex flex-row flex-shrink-0 items-stretch relative">
                        <div className="flex flex-col justify-center relative">
                            <span
                                className="text-[15px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Birth date
                                </span>
                            </span>
                        </div>
                        <div className="px-[4px] flex flex-col justify-center relative">
                            <span
                                className="text-[15px] text-black text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    ·
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col justify-center relative">
                            <span
                                className="text-[15px] text-lime-500 text-left font-normal cursor-pointer break-words relative leading-5 hover:text-lime-700 hover:underline transition-all">
                                <span className="overflow-hidden relative">
                                    Edit
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center relative">
                        <span className="text-[20px] text-black text-left font-normal break-words relative leading-6">
                            <span className="overflow-hidden relative">
                                December 24, 2001
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileEditInput;