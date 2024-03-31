const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Page = require("../../../app/models/Page");

const generatePages = async (numberOfPages) => {
    const pageProps = Array.from({ length: numberOfPages }, () => ({
        _id: new mongoose.Types.ObjectId(),
        page_name: faker.lorem.text(),
        page_description: faker.lorem.paragraph(),
        page_privacy: faker.helpers.arrayElement(["Public", "Private"]),
        page_picture_url: faker.image.url(),
        page_cover_picture_url: faker.image.urlLoremFlickr({ category: "abstract" }),
    }));

    try {
        await Page.insertMany(pageProps);

        console.log("Pages generated successfully.");

        return pageProps;
    } catch (error) {
        return console.error("Error generating pages:", error);
    }
};

module.exports = generatePages;