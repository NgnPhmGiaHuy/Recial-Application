import { deleteVideoDataOnCloud } from "@/utils";

const discardVideoDataUpload = (downloadURL, setVideoProps, handleDeleteSuccess, handleDeleteError) => {
    if (downloadURL) {
        deleteVideoDataOnCloud(downloadURL, handleDeleteSuccess, handleDeleteError);
    } else {
        handleDeleteSuccess();
    }
}

export default discardVideoDataUpload;