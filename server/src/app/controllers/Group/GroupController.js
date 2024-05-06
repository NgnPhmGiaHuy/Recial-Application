const getGroupDataService = require("../../services/groupService/getGroupDataService");

class GroupController {
    getGroupData = async (req, res) => {
        try {
            const groupId = req.query.group;

            const groupProps = await getGroupDataService.getFormattedGroupDataById(groupId);

            if (!groupProps) {
                return res.status(404).json({ error: "Group not found" });
            }

            return res.status(200).json(groupProps);
        } catch (error) {
            console.error("Error getGroupData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    getGroupMember = async (req, res) => {
        try {
            const groupId = req.query.group;

            const groupMemberProps = await getGroupDataService.getFormattedGroupMemberDataById(groupId);

            if (!groupMemberProps) {
                return res.status(404).json({ error: "Group member not found" });
            }

            return res.status(200).json(groupMemberProps);
        } catch (error) {
            console.error("Error in getGroupMember: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    getGroupPost = async (req, res) => {
        try {
            const groupId = req.query.group;
            const postsPerPage = 5;
            const page = parseInt(req.query.page) || 1;

            const groupPostProps = await getGroupDataService.getFormattedGroupPostDataById(groupId, page, postsPerPage);

            if (!groupPostProps) {
                return res.status(404).json({ error: "Group post not found" });
            }

            return res.status(200).json(groupPostProps);
        } catch (error) {
            console.error("Error in getGroupPost: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    getGroupActivity = async (req, res) => {
        try {
            const groupId = req.query.group;

            const groupActivityProps = await getGroupDataService.getFormattedGroupActivityDataById(groupId);

            if (!groupActivityProps) {
                return res.status(404).json({ error: "Group post not found" });
            }

            return res.status(200).json(groupActivityProps);
        } catch (error) {
            console.error("Error in getGroupActivity: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    getMultipleGroupData = async (req, res) => {
        try {
            const groupIds = req.query.groups.split(',');

            const groupDataPromises = groupIds.map(async groupId => {
                const groupProps = await getGroupDataService.getFormattedGroupDataById(groupId.trim());

                return groupProps;
            });

            const groupsData = await Promise.all(groupDataPromises);

            return res.status(200).json(groupsData);
        } catch (error) {
            console.error("Error in getMultipleGroupData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new GroupController();