import {UserProfileEditInputBirthdate, UserProfileEditInputItem} from "@/components";

const UserProfileEditInput = ({ formData, handleFormChange }) => {
    return (
        <>
            <div>
                <UserProfileEditInputItem title="Username*" inputName="session_username" required={true} formData={formData?.session_username} handleFormChange={handleFormChange}/>
            </div>
            <div>
                <UserProfileEditInputItem title="First name*" inputName="session_firstname" required={true} formData={formData?.session_firstname} handleFormChange={handleFormChange}/>
            </div>
            <div>
                <UserProfileEditInputItem title="Last name" inputName="session_lastname" formData={formData?.session_lastname} handleFormChange={handleFormChange}/>
            </div>
            <div>
                <UserProfileEditInputItem title="Description" inputName="session_description" textarea={true} formData={formData?.session_description} handleFormChange={handleFormChange}/>
            </div>
            <div>
                <UserProfileEditInputItem title="Location" inputName="session_location" formData={formData?.session_location} handleFormChange={handleFormChange}/>
            </div>
            <div>
                <UserProfileEditInputBirthdate formData={formData} handleFormChange={handleFormChange}/>
            </div>
        </>
    );
};

export default UserProfileEditInput;