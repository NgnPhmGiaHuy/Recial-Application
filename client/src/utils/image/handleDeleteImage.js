import { deleteObject, ref } from "firebase/storage";

import { storage } from "@/utils/firebase/firebaseConfig";

const handleDeleteImage = async (imageUrl) => {
    if (!imageUrl) return;
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef).catch((error) => console.error("Error deleting old image:", error));
};

export default handleDeleteImage;