const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const User = require("../../../app/models/User");

const generateMediaData = require("../media/generateMediaData");

const generateUserProps = async (insertedRoles) => {
    const userProps = await Promise.all(Array.from({ length: 1000 }, async () => {
        return {
            _id: new mongoose.Types.ObjectId(),
            email: faker.internet.email(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
            refreshToken: faker.string.uuid(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            phone_number: faker.phone.number(),
            description: faker.lorem.paragraph(),
            short_description: faker.lorem.text(),
            date_of_birth: faker.date.birthdate({ min: 10, max: 65, mode: "age" }),
            gender: faker.helpers.arrayElement(["Male", "Female", "Other"]),
            roles: [insertedRoles[0]._id],
            profile_picture_url: faker.image.avatarLegacy(),
            profile_cover_photo_url: faker.image.urlLoremFlickr({ category: "abstract" }),
        };
    }))

    try {
        await User.insertMany(userProps);

        console.log("Users generated successfully.")

        return userProps;
    } catch (error) {
        return console.error("Error generating users:", error);
    }
};

module.exports = generateUserProps;