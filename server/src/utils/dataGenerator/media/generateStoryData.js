const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Story = require("../../../app/models/Story");

const generateStoryData = async (allUsers, maxNumberOfStories) => {
    try {
        const allStories = await Promise.all(allUsers.map(async (user) => {
            const numberOfStories = faker.number.int({ min: 1, max: maxNumberOfStories });

            const storiesProps = await Promise.all(Array.from({ length: numberOfStories }, async () => {
                const story = new Story ({
                    _id: new mongoose.Types.ObjectId,
                    story_media_url: faker.image.url(),
                    story_duration: faker.number.int({ max: 360 }),
                });

                user.story_list.unshift(story._id);

                return story.save();
            }));

            await user.save();

            return storiesProps;
        }))

        console.log("Stories generated successfully.");

        return allStories.flat();
    } catch (error) {
        return console.error("Error generating stories:", error);
    }
}

module.exports = generateStoryData;