const { faker } = require("@faker-js/faker");

const generateFollowings = async (allUsers) => {
    return Promise.all(allUsers.map(async (user) => {
        const followingsToAdd = 10 - user.following.length;
        for (let i = 0; i < followingsToAdd; i++) {
            const randomFollowing = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.following.includes(u._id)));
            user.following.push(randomFollowing._id);
        }
        await user.save();
    }));
}

module.exports = generateFollowings;