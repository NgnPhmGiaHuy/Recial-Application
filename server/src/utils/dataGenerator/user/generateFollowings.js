const { faker } = require("@faker-js/faker");

const generateFollowings = async (allUsers, maxNumberOfFollowing) => {
    const followings = await Promise.all(allUsers.map(async (user) => {
        const numberOfFollowing = faker.number.int({ min: 1, max: maxNumberOfFollowing });

        for (let i = 0; i < numberOfFollowing; i++) {
            const randomFollowing = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.following.includes(u._id)));
            user.following.push(randomFollowing._id);
        }
        await user.save();
    }));

    return console.log("Followings generated successfully.");
}

module.exports = generateFollowings;