import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uploadVideoDataOnCloud = (file, userId, progressCallback, successCallback, errorCallback) => {
    const storage = getStorage();
    const storageRef = ref(storage, `${userId}/videos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask.on("state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progressCallback(progress);
        },
        (error) => {
            errorCallback(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                successCallback(downloadURL);
            });
        }
    );
};

export default uploadVideoDataOnCloud;