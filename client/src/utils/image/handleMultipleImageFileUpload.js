import readFileAsDataURL from "@/utils/readFileAsDataURL";

const handleMultipleImageFileUpload = async (event, setSelectedImages) => {
    const uploadedFiles = event.target.files;

    const validFiles = Array.from(uploadedFiles).filter(
        (file) => file.type.includes("image/") || file.type.includes("video/")
    );

    const imageFiles = validFiles.filter((file, index) => index < 5 && file.type.includes("image/"));

    const imageDataPromises = imageFiles.map(async (file) => {
        return await readFileAsDataURL(file);
    });

    const imagesData = await Promise.all(imageDataPromises);

    return setSelectedImages((prevImages) => [...prevImages, ...imagesData]);
}

export default handleMultipleImageFileUpload;