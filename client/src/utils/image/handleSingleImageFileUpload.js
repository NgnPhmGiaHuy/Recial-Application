import readFileAsDataURL from "@/utils/readFileAsDataURL";

const handleSingleImageFileUpload = async (event, setSelectedImage) => {
    const uploadedFiles = event.target.files;

    const validFiles = Array.from(uploadedFiles).filter(
        (file) => file.type.includes("image/") || file.type.includes("video/")
    );

    const imageFiles = validFiles.filter((file) => file.type.includes("image/"));

    if (imageFiles.length > 0) {
        const imageData = await readFileAsDataURL(imageFiles[0]);
        return setSelectedImage(imageData);
    } else {
        return setSelectedImage(null);
    }
};

export default handleSingleImageFileUpload;