const Post = require("../models/Post");
const Role = require("../models/Role");
const Group = require("../models/Group");
const GroupMember = require("../models/GroupMember");

const postDataService = require("./postDataService");
const userDataService = require("./userDataService");

class GroupDataService {
    getGroupDataById = async (groupId) => {
        const groupProps = await Group.findById(groupId);

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
            .skip(skipPosts)
            .limit(postsPerPage);

        return await postDataService.enhancePostsWithUserData(groupPostProps);
    }

    getGroupMemberDataById = async (groupId) => {
        const groupMemberProps = await GroupMember.find({ group_id: groupId });

        return Promise.all(groupMemberProps.map(async (member) => {
            return {
                user: await userDataService.getUserById(member.user.user_id),
                role: (await Role.findById(member.user.user_role)).role_name,
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

module.exports = new GroupDataService();