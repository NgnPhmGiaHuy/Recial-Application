const Post = require("../../models/Post");
const Group = require("../../models/Group");
const GroupMember = require("../../models/GroupMember");

const getRoleDataService = require("../roleService/getRoleDataService");
const getUserDataService = require("../userService/getUserDataService");
const enhancePostDataService = require("../postService/enhancePostDataService");

class GetGroupDataService {
    getRawGroupData = async (groupId) => {
        return Group.findById(groupId);
    }

    getFormattedGroupDataById = async (groupId) => {
        const groupProps = await this.getRawGroupData(groupId);

        const { createdAt, updatedAt, ...otherGroupProps } = groupProps._doc;

        return {
            ...otherGroupProps,
            created_at: createdAt,
            updated_at: updatedAt,
        }
    };

    getGroupPostProps = async (groupId, page, postsPerPage) => {
        const skipPosts = (page - 1) * postsPerPage;

        const groupPostProps = await Post.find({ group: groupId })
            .sort({ createdAt: -1 })
            .skip(skipPosts)
            .limit(postsPerPage);

        return await enhancePostDataService.enhancePostsWithUserData(groupPostProps);
    }

    getGroupMemberDataById = async (groupId) => {
        const groupMemberProps = await GroupMember.find({ group_id: groupId });

        return Promise.all(groupMemberProps.map(async (member) => {
            const userData = await getUserDataService.getFormattedUserData(member.user.user_id)
            const roleData = await getRoleDataService.getRawRoleData(member.user.user_role);

            return {
                user: userData,
                role: roleData.role_name,
            }
        }))
    }

    getGroupActivity = async (groupId) => {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const twentyFourHoursAgo = new Date();
        twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

        const groupPostToday = await Post.find({
            group: groupId,
            createdAt: { $gte: twentyFourHoursAgo },
        });

        const groupPostLastMonth = await Post.find({
            group: groupId,
            createdAt: { $gte: oneMonthAgo },
        });

        const groupMemberAddLastWeek = await GroupMember.find({
            group_id: groupId,
            createdAt: { $gte: oneWeekAgo },
        })

        return { groupPostToday: groupPostToday.length, groupPostLastMonth: groupPostLastMonth.length, groupMemberAddLastWeek: groupMemberAddLastWeek.length }
    }
}

module.exports = new GetGroupDataService();