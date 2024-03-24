const { faker } = require("@faker-js/faker");

const generateFollowers = async (allUsers) => {
    return Promise.all(allUsers.map(async (user) => {
        const followersToAdd = 10 - user.followers.length;
        for (let i = 0; i < followersToAdd; i++) {
            const randomFollower = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.followers.includes(u._id)));
            user.followers.push(randomFollower._id);
        }
        await user.save();
    }));
}

module.exports = generateFollowers;