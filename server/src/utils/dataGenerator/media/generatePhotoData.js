const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Photo = require("../../../app/models/Photo");

const generatePhotoData = async () => {
    const photo = new Photo({
        _id: new mongoose.Types.ObjectId(),
        photo_url: faker.image.url(),
        photo_title: faker.lorem.text(),
        photo_description: faker.lorem.paragraph(),
    })

    try {
        await photo.save()

        return photo;
    } catch (error) {
        return console.error("Error generating photo: ", error);
    }
}

module.exports = generatePhotoData;