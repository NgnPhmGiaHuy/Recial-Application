const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const User = require("../../../app/models/User");

const existingEmails = new Set();

const generateUserProps = async (insertedRoles, length) => {
    const userProps = await Promise.all(Array.from({ length: length }, async () => {
        let email;
        do {
            email = faker.internet.email();
        } while (existingEmails.has(email));

        existingEmails.add(email);

        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: email,
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
        });

        try {
            await user.save();

            return user;
        } catch (error) {
            return console.error("Error saving user: ", error);
        }
    }));

    console.log("Users generated successfully.");

    return userProps;
};


module.exports = generateUserProps;