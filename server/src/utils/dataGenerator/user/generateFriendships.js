const { faker } = require("@faker-js/faker");

const generateFriendships = async (allUsers, maxNumberOfFriendships) => {
    const friendShips = await Promise.all(allUsers.map(async (user) => {
        const numberOfFriendships = faker.number.int({ min: 1, max: maxNumberOfFriendships });

        for (let i = 0; i < numberOfFriendships; i++) {
            const randomFriend = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.friends.includes(u._id)));
            user.friends.push(randomFriend._id);
        }
        await user.save();
    }));

    return console.log("Friendships generated successfully.");
};

module.exports = generateFriendships;