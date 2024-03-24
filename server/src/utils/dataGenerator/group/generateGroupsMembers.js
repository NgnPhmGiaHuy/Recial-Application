const { faker } = require("@faker-js/faker");

const GroupMember = require("../../../app/models/GroupMember");

const generateGroupsMembers = async (allGroups, allUsers, insertedRoles) => {
    const groupMemberProps = allGroups.flatMap(group => {
        return Array.from({ length: 50 }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                group_id: group._id,
                user: {
                    user_id: randomUser._id,
                    user_role: insertedRoles[faker.helpers.arrayElement([5, 6, 7, 8, 9])]._id,
                },
            };
        });
    });

    try {
        await GroupMember.insertMany(groupMemberProps);

        return console.log("Group Members generated successfully.");
    } catch (error) {
        return console.error("Error generating group members:", error);
    }
};

module.exports = generateGroupsMembers;