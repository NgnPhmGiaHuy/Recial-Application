const { faker } = require("@faker-js/faker");

const FriendRequest = require("../../../app/models/FriendRequest");

const generateFriendRequests = async (allUsers, maxNumberOfFriendRequests) => {
    const friendRequests = await Promise.all(allUsers.map(async (user) => {
        const numberOfFriendRequests = faker.number.int({ min: 1, max: maxNumberOfFriendRequests });

        const friendRequest = await Promise.all(Array.from({ length: numberOfFriendRequests }, () => {
            const sourceUserFriendIDs = user.friends.map(friend => friend.toString());

            const potentialDestinationUsers = allUsers.filter(user => !sourceUserFriendIDs.includes(user._id.toString()));

            const filteredDestinationUser = potentialDestinationUsers[Math.floor(Math.random() * potentialDestinationUsers.length)];

            return {
                source_id: user._id,
                destination_id: filteredDestinationUser._id
            };
        }))

        return friendRequest;
    }));

    try {
        await FriendRequest.insertMany(friendRequests.flat());

        return console.log("Friend Requests generated successfully.");
    } catch (error) {
        return console.error("Error generating friend requests: ", error);
    }
}

module.exports = generateFriendRequests;