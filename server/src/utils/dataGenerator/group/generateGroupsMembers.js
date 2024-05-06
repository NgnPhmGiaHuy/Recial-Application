const { faker } = require("@faker-js/faker");

const GroupMember = require("../../../app/models/GroupMember");

const generateGroupsMembers = async (allGroups, allUsers, insertedRoles, maxNumberOfGroupsMembers) => {
    const groupMemberProps = allGroups.flatMap(group => {
        const numberOfGroupsMembers = faker.number.int({ min: 1, max: maxNumberOfGroupsMembers });

        return Array.from({ length: numberOfGroupsMembers }, () => {
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
        return console.error("Error generating group members: ", error);
    }
};

module.exports = generateGroupsMembers;