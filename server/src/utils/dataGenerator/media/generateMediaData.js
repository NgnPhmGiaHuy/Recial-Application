const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const generateMediaData = () => {
    const photos = Array.from({ length: 100000 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        photo_url: faker.image.url(),
        photo_title: faker.lorem.text(),
        photo_description: faker.lorem.paragraph(),
    }));

    const videos = Array.from({ length: 50 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        video_url: faker.internet.url(),
        video_title: faker.lorem.text(),
        video_description: faker.lorem.paragraph(),
        video_thumbnail: faker.image.url(),
        video_resolution: faker.helpers.arrayElement(["360", "480", "720", "1080"]),
    }));

    const posts = Array.from({ length: 50 }, () => {
        const numPhotos = faker.number.int({ min: 1, max: 10 });
        const postPhotos = Array.from({ length: numPhotos }, () => {
            const uniquePhoto = photos.pop();
            return uniquePhoto ? uniquePhoto._id : null;
        }).filter(photo => photo !== null);

        return {
            _id: new mongoose.Types.ObjectId(),
            post_title: faker.lorem.text(),
            post_photos: postPhotos,
            post_content: faker.lorem.paragraph(),
            post_privacy: faker.helpers.arrayElement(["Public", "Private", "Friends", "Specific_Friends"]),
        };
    });


    const stories = Array.from({ length: 50 }, () => ({
        _id: new mongoose.Types.ObjectId,
        story_media_url: faker.image.url(),
        story_duration: faker.number.int({ max: 360 }),
    }))

    return { photos, videos, posts, stories };
};

module.exports = generateMediaData