const { faker } = require("@faker-js/faker");

const generateFollowers = async (allUsers, maxNumberOfFollowers) => {
    const followers = await Promise.all(allUsers.map(async (user) => {
        const numberOfFollowers = faker.number.int({ min: 1, max: maxNumberOfFollowers });

        for (let i = 0; i < numberOfFollowers; i++) {
            const randomFollower = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.followers.includes(u._id)));
            user.followers.push(randomFollower._id);
        }

        await user.save();
    }));

    return console.log("Followers generated successfully.");
}

module.exports = generateFollowers;