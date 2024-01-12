const Page = require("../models/Page");
const Event = require("../models/Event");
const Group = require("../models/Group");
const GroupMember = require("../models/GroupMember");
const userDataService = require("./userDataService");

class SuggestDataService {
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
            return await userDataService.getUserById(member.user.user_id);
        }));

        return {
            ...suggestGroups[0],
            members: suggestGroupMembersProps,
        }
    }
}

module.exports = new SuggestDataService();