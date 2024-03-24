const { faker } = require("@faker-js/faker");

const Setting = require("../../../app/models/Setting");

const generateSettings = async (allUsers) => {
    const settingProps = await Promise.all(allUsers.map(async (user) => {
        return {
            source_id: user._id,
            account: {
                security: {
                    two_factor_auth: faker.datatype.boolean(),
                    login_alerts: faker.datatype.boolean(),
                }
            },
            content: {
                auto_play_video: faker.datatype.boolean(),
            },
            privacy: {
                friend_request: faker.helpers.arrayElement(["Everyone", "Friends_of_friends", "None"]),
                post_visibility: faker.helpers.arrayElement(["Public", "Private", "Friends", "Specific_Friends"]),
                profile_privacy: faker.helpers.arrayElement(["Public", "Private", "Friends", "Specific_Friends"]),
            }
        }
    }))

    try {
        await Setting.insertMany(settingProps);

        return console.log("Setting generated successfully.");
    } catch (error) {
        return console.error("Error generating settings:", error);
    }
}

module.exports = generateSettings;