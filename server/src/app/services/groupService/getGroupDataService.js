const Post = require("../../models/Post");
const PostShare = require("../../models/PostShare");
const Group = require("../../models/Group");
const GroupPost = require("../../models/GroupPost");
const GroupMember = require("../../models/GroupMember");

const generalDataService = require("../generalDataService");
const getRoleDataService = require("../roleService/getRoleDataService");
const getUserDataService = require("../userService/getUserDataService");
const getPostDataService = require("../postService/getPostDataService");

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

    getFormattedGroupProfileData = async (group) => {
        const { createdAt, updatedAt, group_tags, group_description, group_privacy, group_visible, group_location, ...otherGroupProps } = group;

        return {
            ...otherGroupProps,
            created_at: createdAt,
            updated_at: updatedAt,
        }
    }

    getGroupPostProps = async (groupId, page, postsPerPage) => {
        const skipPosts = (page - 1) * postsPerPage;

        const groupPostProps = await GroupPost.find({ group_id: groupId })
            .sort({ createdAt: -1 })
            .skip(skipPosts)
            .limit(postsPerPage)
            .populate("post_id")
            .populate("group_id");

        const formattedGroupPosts = await Promise.all(groupPostProps.map(async (groupPost) => {
            const { group_id, post_id, ...rest } = groupPost.toObject();

            const { post_photos, createdAt, updatedAt, ...otherPostIdProps } = post_id;

            const [group, photo, user, comment, reaction, share] = await Promise.all([
                this.getFormattedGroupProfileData(group_id),
                getPostDataService.getPostPhoto(post_id),
                getPostDataService.getPostAuthor(post_id),
                generalDataService.getComment(post_id),
                generalDataService.getReaction(post_id),
                generalDataService.getUsersByInteractionType(PostShare, "post_id", post_id)
            ]);

            return {
                post: {
                    user,
                    group: group,
                    ...otherPostIdProps,
                    created_at: createdAt,
                    updated_at: updatedAt,
                },
                photo, comment, reaction, share,
            };
        }));

        return formattedGroupPosts;
    }

    getGroupMemberDataById = async (groupId) => {
        const groupMemberProps = await GroupMember.find({ group_id: groupId });

        return await Promise.all(groupMemberProps.map(async (member) => {
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