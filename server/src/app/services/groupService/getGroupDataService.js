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
        try {
            const groupData = await Group.findById(groupId);

            return groupData;
        } catch (error) {
            console.error("Error in getRawGroupData: ", error);
            throw new Error("Failed to fetch raw group data");
        }
    }

    getFormattedGroupDataById = async (groupId) => {
        try {
            const groupProps = await this.getRawGroupData(groupId);
            const { createdAt, updatedAt, ...otherGroupProps } = groupProps._doc;
            
            return {
                ...otherGroupProps,
                created_at: createdAt,
                updated_at: updatedAt,
            };
        } catch (error) {
            console.error("Error in getFormattedGroupDataById: ", error);
            throw new Error("Failed to format group data by ID");
        }
    };

    getFormattedGroupProfileDataByGroupData = async (group) => {
        try {
            const { createdAt, updatedAt, group_tags, group_description, group_privacy, group_visible, group_location, ...otherGroupProps } = group;
            return {
                ...otherGroupProps,
                created_at: createdAt,
                updated_at: updatedAt,
            };
        } catch (error) {
            console.error("Error in getFormattedGroupProfileDataByGroupData: ", error);
            throw new Error("Failed to format group profile data");
        }
    }

    getFormattedGroupPostDataById = async (groupId, pageNumber, postsPerPage) => {
        try {
            const skipPosts = (parseInt(pageNumber) - 1) * postsPerPage;

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
                    this.getFormattedGroupProfileDataByGroupData(group_id),
                    getPostDataService.getFormattedPostPhotoDataById(post_id),
                    getPostDataService.getFormattedPostAuthorDataById(post_id),
                    generalDataService.getCommentData(post_id),
                    generalDataService.getReactionData(post_id),
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
        } catch (error) {
            console.error("Error in getFormattedGroupPostDataById: ", error);
            throw new Error("Failed to fetch group post properties");
        }
    }

    getFormattedGroupMemberDataById = async (groupId) => {
        try {
            const groupMemberData = await GroupMember.find({ group_id: groupId });
            
            const groupMemberProps = await Promise.all(groupMemberData.map(async (member) => {
                const userData = await getUserDataService.getFormattedUserDataById(member.user.user_id)
                const roleData = await getRoleDataService.getRawRoleData(member.user.user_role);

                return {
                    user: userData,
                    role: roleData.role_name,
                }
            }));
            
            return groupMemberProps;
        } catch (error) {
            console.error("Error in getFormattedGroupMemberDataById: ", error);
            throw new Error("Failed to fetch group member data by ID");
        }
    }

    getFormattedGroupActivityDataById = async (groupId) => {
        try {
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

            return { group_post_today: groupPostToday.length, group_post_last_month: groupPostLastMonth.length, group_member_add_last_week: groupMemberAddLastWeek.length };
        } catch (error) {
            console.error("Error in getFormattedGroupActivityDataById: ", error);
            throw new Error("Failed to fetch group activity");
        }
    }
}

module.exports = new GetGroupDataService();