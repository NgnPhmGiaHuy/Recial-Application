const FriendRequest = require("../../../app/models/FriendRequest");

const generateFriendRequests = async (allUsers) => {
    const friendRequests = Array.from({ length: 10000 }, () => {
        const randomSourceUser = allUsers[Math.floor(Math.random() * allUsers.length)];

        const sourceUserFriendIDs = randomSourceUser.friends.map(friend => friend.toString());

        const potentialDestinationUsers = allUsers.filter(user => !sourceUserFriendIDs.includes(user._id.toString()));

        const filteredDestinationUser = potentialDestinationUsers[Math.floor(Math.random() * potentialDestinationUsers.length)];

        return {
            source_id: randomSourceUser._id,
            destination_id: filteredDestinationUser._id
        };
    });

    try {
        await FriendRequest.insertMany(friendRequests);

        return console.log("Friend Requests generated successfully.");
    } catch (error) {
        return console.error("Error generating friend requests:", error);
    }
}

module.exports = generateFriendRequests;