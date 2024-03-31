const { faker } = require("@faker-js/faker");

const PageLike = require("../../../app/models/PageLike");

const generatePagesLikes = async (allPages, allUsers, maxNumberOfPagesLikes) => {
    const pageLikeProps = allPages.flatMap(page => {
        const numberOfPagesLikes = faker.number.int({ min: 1, max: maxNumberOfPagesLikes });

        return Array.from({ length: numberOfPagesLikes }, () => {
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