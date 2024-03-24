const { faker } = require("@faker-js/faker");

const generateFriendships = async (allUsers) => {
    return Promise.all(allUsers.map(async (user) => {
        const friendsToAdd = 10 - user.friends.length;
        for (let i = 0; i < friendsToAdd; i++) {
            const randomFriend = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.friends.includes(u._id)));
            user.friends.push(randomFriend._id);
        }
        await user.save();
    }));
};

module.exports = generateFriendships;