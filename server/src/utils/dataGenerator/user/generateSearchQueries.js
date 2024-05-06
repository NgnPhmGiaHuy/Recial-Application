const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const SearchHistory = require("../../../app/models/SearchHistory");

const generateSearchQueries = async (allUsers, numberOfSearchQueries) => {
    const searchQuery = Array.from({ length: numberOfSearchQueries }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);

        return {
            _id: new mongoose.Types.ObjectId(),
            source_id: randomUser._id,
            search_query: faker.lorem.paragraph(),
        }
    });

    try {
        await SearchHistory.insertMany(searchQuery);

        return console.log("Search History generated successfully.");
    } catch (error) {
        return console.error("Error generating search queries: ", error);
    }
};

module.exports = generateSearchQueries;