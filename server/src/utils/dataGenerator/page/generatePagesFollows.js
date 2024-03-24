const { faker } = require("@faker-js/faker");

const PageFollow = require("../../../app/models/PageFollow");

const generatePagesFollows = async (allPages, allUsers) => {
    const pageFollowProps = allPages.flatMap(page => {
        return Array.from({ length: 50 }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                page_id: page._id,
                user_id: randomUser._id,
            };
        });
    })

    try {
        await PageFollow.insertMany(pageFollowProps);

        return console.log("Page Follow generated successfully.");
    } catch (error) {
        return console.error("Error generating pages follow:", error);
    }
};

module.exports = generatePagesFollows;