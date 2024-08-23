import { UserProfileEditInputBirthdate, BoxedLabeledInput } from "@/components";

const UserProfileEditInput = ({ formData, handleFormChange }) => {
    return (
        <>
            <div>
                <BoxedLabeledInput label="Username*" name="session_username" required={true} value={formData?.session_username} onChange={handleFormChange}/>
            </div>
            <div>
                <BoxedLabeledInput label="First name*" name="session_firstname" required={true} value={formData?.session_firstname} onChange={handleFormChange}/>
            </div>
            <div>
                <BoxedLabeledInput label="Last name" name="session_lastname" value={formData?.session_lastname} onChange={handleFormChange}/>
            </div>
            <div>
                <BoxedLabeledInput label="Description" name="session_description" textarea={true} value={formData?.session_description} onChange={handleFormChange}/>
            </div>
            <div>
                <BoxedLabeledInput label="Location" name="session_location" value={formData?.session_location} onChange={handleFormChange}/>
            </div>
            <div>
                <UserProfileEditInputBirthdate formData={formData} handleFormChange={handleFormChange} />
            </div>
        </>
    );
};

export default UserProfileEditInput;