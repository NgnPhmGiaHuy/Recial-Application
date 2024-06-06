import { getStorage, ref, deleteObject } from "firebase/storage";

const deleteVideoDataOnCloud = (downloadURL, successCallback, errorCallback) => {
    const storage = getStorage();
    const storageRef = ref(storage, downloadURL);

    deleteObject(storageRef).then(() => {
        successCallback();
    }).catch((error) => {
        errorCallback(error);
    });
};

export default deleteVideoDataOnCloud;