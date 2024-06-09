import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "@/utils/firebase/firebaseConfig";

const handleUploadImage = async (base64String, userId) => {
    if (base64String.startsWith("data:image")) {
        const block = base64String.split(";");
        const contentType = block[0].split(":")[1];
        const realData = block[1].split(",")[1];

        const blob = await fetch(`data:${contentType};base64,${realData}`).then((res) =>
            res.blob()
        );

        const file = new File([blob], `image_${Date.now()}_${userId}.jpeg`, {
            type: contentType,
        });

        const imageRef = ref(storage, `${userId}/images/${file.name}`);

        const snapshot = await uploadBytes(imageRef, file);

        return getDownloadURL(snapshot.ref);
    } else {
        return base64String;
    }
};

export default handleUploadImage;