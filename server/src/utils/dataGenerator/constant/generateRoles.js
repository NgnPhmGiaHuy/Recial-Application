const mongoose = require("mongoose");

const Role =  require("../../../app/models/Role");

const generateRoles = async () => {
    const roleProps = [
        { _id: new mongoose.Types.ObjectId(), role_name: "user", role_permissions: "user_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "admin", role_permissions: "admin_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "viewer", role_permissions: "viewer_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "member", role_permissions: "member_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "moderator", role_permissions: "moderator_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "group_owner", role_permissions: "group_owner_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "group_member", role_permissions: "group_member_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "group_moderator", role_permissions: "group_moderator_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "group_contributor", role_permissions: "group_contributor_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "group_administrator", role_permissions: "group_administrator_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "page_owner", role_permissions: "page_owner_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "page_moderator", role_permissions: "page_moderator_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "page_contributor", role_permissions: "page_contributor_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "page_administrator", role_permissions: "page_administrator_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "event_owner", role_permissions: "event_owner_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "event_member", role_permissions: "event_member_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "event_moderator", role_permissions: "event_moderator_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "event_contributor", role_permissions: "event_contributor_permissions_here" },
        { _id: new mongoose.Types.ObjectId(), role_name: "event_administrator", role_permissions: "event_administrator_permissions_here" },
    ]

    try {
        await Role.insertMany(roleProps);

        console.log("Roles generated successfully.");

        return roleProps;
    } catch (error) {
        return console.error("Error generating roles: ", error);
    }
};

module.exports = generateRoles;