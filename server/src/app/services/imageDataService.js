const fs = require("fs");
const path = require("path");

const Photo = require("../models/Photo");

const saveImage = async (imageData, user, postPrivacy) => {
    const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, "base64");

    const imageName = `image_${Date.now()}_${user._id}.jpeg`;
    const imageDirectory = path.join(__dirname, "..", "..", "data", `${user._id}`, "photos");
    const imagePath = path.join(imageDirectory, imageName);

    if (!fs.existsSync(imageDirectory)) {
        fs.mkdirSync(imageDirectory, { recursive: true });
    }

    fs.writeFileSync(imagePath, imageBuffer);

    const newPhoto = new Photo({
        photo_url: imagePath,
        photo_title: imageName,
        photo_privacy: postPrivacy,
    });

    await newPhoto.save();
    return newPhoto;
};

module.exports = { saveImage };