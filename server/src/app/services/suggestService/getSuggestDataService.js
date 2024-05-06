const Page = require("../../models/Page");
const Event = require("../../models/Event");
const Group = require("../../models/Group");
const GroupMember = require("../../models/GroupMember");
const getUserDataService = require("../userService/getUserDataService");

class GetSuggestDataService {
    getSuggestedEventsData = async () => {
        try {
            const suggestEventData = await Event.aggregate([
                { $match: { event_privacy: "Public" } },
                { $sample: { size: 3 } },
                { $sort: { createdAt: -1 } },
            ]);
            
            return suggestEventData;
        } catch (error) {
            console.error("Error in getSuggestedEventsData: ", error);
            throw new Error("Failed to fetch suggested events");
        }
    };

    getSuggestedPagesData = async () => {
        try {
            const suggestPageData = await Page.aggregate([
                { $match: { page_privacy: "Public" } },
                { $sample: { size: 3 } },
                { $sort: { createdAt: -1 } },
            ]);
            
            return suggestPageData;
        } catch (error) {
            console.error("Error in getSuggestedPagesData: ", error);
            throw new Error("Failed to fetch suggested pages");
        }
    };

    getSuggestedGroupData = async () => {
        try {
            const suggestGroups = await Group.aggregate([
                { $match: { group_visible: true } },
                { $match: { group_privacy: "Public" } },
                { $sample: { size: 1 } },
            ]);

            const suggestGroupMembers = await GroupMember.find({ group_id: suggestGroups[0]._id });

            const suggestGroupMembersProps = await Promise.all(suggestGroupMembers.map(async member => {
                return await getUserDataService.getFormattedUserDataById(member.user.user_id);
            }));

            return {
                ...suggestGroups[0],
                members: suggestGroupMembersProps,
            };
        } catch (error) {
            console.error("Error in getSuggestedGroupData: ", error);
            throw new Error("Failed to fetch suggested group");
        }
    }
}

module.exports = new GetSuggestDataService();
