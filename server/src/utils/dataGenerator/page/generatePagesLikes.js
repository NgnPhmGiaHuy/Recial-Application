const { faker } = require("@faker-js/faker");

const PageLike = require("../../../app/models/PageLike");

const generatePagesLikes = async (allPages, allUsers) => {
    const pageLikeProps = allPages.flatMap(page => {
        return Array.from({ length: 50 }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                page_id: page._id,
                user_id: randomUser._id,
            };
        });
    })

    try {
        await PageLike.insertMany(pageLikeProps);

        return console.log("Page Like generated successfully.");
    } catch (error) {
        return console.error("Error generating pages likes:", error);
    }
};

module.exports = generatePagesLikes;