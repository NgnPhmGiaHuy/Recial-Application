const { faker } = require("@faker-js/faker");

const PageMember = require("../../../app/models/PageMember");

const generatePagesMembers = async (allPages, allUsers, insertedRoles, maxNumberOfPagesMembers) => {
    const pageMemberProps = allPages.flatMap(page => {
        const numberOfPagesMembers = faker.number.int({ min: 1, max: maxNumberOfPagesMembers });

        return Array.from({ length: numberOfPagesMembers }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                page_id: page._id,
                user: {
                    user_id: randomUser._id,
                    user_role: insertedRoles[faker.helpers.arrayElement([10, 11, 12, 13])]._id,
                },
            };
        });
    });

    try {
        await PageMember.insertMany(pageMemberProps);

        return console.log("Page Members generated successfully.");
    } catch (error) {
        return console.error("Error generating page members: ", error);
    }
};

module.exports = generatePagesMembers;