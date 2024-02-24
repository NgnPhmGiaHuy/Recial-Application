const Page = require("../../models/Page");
const Event = require("../../models/Event");
const Group = require("../../models/Group");
const GroupMember = require("../../models/GroupMember");
const getUserDataService = require("../userService/getUserDataService");

class GetSuggestDataService {
    getSuggestedEvents = async () => {
        return Event.aggregate([
            { $match: { event_privacy: "Public" } },
            { $sample: { size: 3 } },
            { $sort: { createdAt: -1 } },
        ]);
    };

    getSuggestedPages = async () => {
        return Page.aggregate([
            { $match: { page_privacy: "Public" } },
            { $sample: { size: 3 } },
            { $sort: { createdAt: -1 } },
        ]);
    };

    getSuggestedGroup = async () => {
        const suggestGroups = await Group.aggregate([
            { $match: { group_visible: true } },
            { $match: { group_privacy: "Public" } },
            { $sample: { size: 1 } },
        ]);


        const suggestGroupMembers = await GroupMember.find({ group_id: suggestGroups[0]._id });

        const suggestGroupMembersProps = await Promise.all(suggestGroupMembers.map(async member => {
            return await getUserDataService.getFormattedUserData(member.user.user_id);
        }));

        return {
            ...suggestGroups[0],
            members: suggestGroupMembersProps,
        }
    }
}

module.exports = new GetSuggestDataService();