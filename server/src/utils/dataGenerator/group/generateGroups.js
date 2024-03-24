const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Group = require("../../../app/models/Group");

const generateGroups = async () => {
    const groupProps = Array.from({ length: 100 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        group_name: faker.lorem.text(),
        group_description: faker.lorem.paragraph(),
        group_privacy: faker.helpers.arrayElement(["Public", "Private"]),
        group_visible: faker.datatype.boolean(),
        group_picture_url: faker.image.url(),
        group_cover_picture_url: faker.image.urlLoremFlickr({ category: "abstract" }),
    }));

    try {
        await Group.insertMany(groupProps);

        console.log("Groups generated successfully.");

        return groupProps;
    } catch (error) {
        return console.error("Error generating groups:", error);
    }
};

module.exports = generateGroups;