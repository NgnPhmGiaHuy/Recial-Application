const jwt = require("jsonwebtoken");

const PageMember = require("../../models/PageMember");
const GroupMember = require("../../models/GroupMember");
const EventMember = require("../../models/EventMember");

const getRoleDataService = require("../roleService/getRoleDataService");

class GenerateToken {
    generateAccessToken = async (user) => {
        try {
            const userPageRoles = await PageMember.find({ "user.user_id": user._id });
            const userGroupRoles = await GroupMember.find({ "user.user_id": user._id });
            const userEventRoles = await EventMember.find({ "user.user_id": user._id });

            const userGroupRoleProps = {};
            await Promise.all(userGroupRoles.map(async (curr) => {
                const roleProps = await getRoleDataService.getRawRoleData(curr.user.user_role);
                userGroupRoleProps[curr.group_id] = roleProps.role_name;
            }));

            const userEventRoleProps = {};
            await Promise.all(userEventRoles.map(async (curr) => {
                const roleProps = await getRoleDataService.getRawRoleData(curr.user.user_role);
                userEventRoleProps[curr.event_id] = roleProps.role_name;
            }));

            const userPageRoleProps = {};
            await Promise.all(userPageRoles.map(async (curr) => {
                const roleProps = await getRoleDataService.getRawRoleData(curr.user.user_role);
                userPageRoleProps[curr.page_id] = roleProps.role_name;
            }));

            const tokenPayload = {
                user_id: user._id,
                profile: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    profile_picture_url: user.profile_picture_url,
                    profile_cover_photo_url: user.profile_cover_photo_url,
                },
                roles: {
                    global: user.roles,
                    page: userPageRoleProps,
                    event: userEventRoleProps,
                    group: userGroupRoleProps,
                }
            };

            return jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        } catch (error) {
            return console.error('Error generating access token:', error);
        }
    };

    generateRefreshToken = (user) => {
        return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '365d' });
    };
}

module.exports = new  GenerateToken();