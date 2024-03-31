const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Video = require("../../../app/models/Video");

const generateVideoData = async (allUsers, maxNumberOfVideos) => {
    try {
        const allVideos = await Promise.all(allUsers.map(async (user) => {
            const numberOfVideos = faker.number.int({ min: 1, max: maxNumberOfVideos });

            const videosProps = await Promise.all(Array.from({ length: numberOfVideos }, async () => {
                const video = new Video ({
                    _id: new mongoose.Types.ObjectId(),
                    video_url: faker.internet.url(),
                    video_title: faker.lorem.text(),
                    video_description: faker.lorem.paragraph(),
                    video_thumbnail: faker.image.url(),
                    video_resolution: faker.helpers.arrayElement(["360", "480", "720", "1080"]),
                });

                user.video_list.unshift(video._id);

                return video.save();
            }));

            await user.save();

            return videosProps;
        }))

        console.log("Videos generated successfully.");

        return allVideos.flat();
    } catch (error) {
        return console.error("Error generating videos:", error);
    }
}

module.exports = generateVideoData;