const groupDataService = require("../../services/groupDataService");

class GroupController {
    getGroupData = async (req, res) => {
        try {
            const groupId = req.query.group;

            const groupProps = await groupDataService.getGroupDataById(groupId);

            if (!groupProps) {
                return res.status(404).json({ error: "Group not found" });
            }

            return res.status(200).json(groupProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getGroupMember = async (req, res) => {
        try {
            const groupId = req.query.group;

            const groupMemberProps = await groupDataService.getGroupMemberDataById(groupId);

            if (!groupMemberProps) {
                return res.status(404).json({ error: "Group member not found" });
            }

            return res.status(200).json(groupMemberProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getGroupPost = async (req, res) => {
        try {
            const groupId = req.query.group;
            const postsPerPage = 5;
            const page = parseInt(req.query.page) || 1;

            const groupPostProps = await groupDataService.getGroupPostProps(groupId, page, postsPerPage);

            if (!groupPostProps) {
                return res.status(404).json({ error: "Group post not found" });
            }

            return res.status(200).json(groupPostProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getGroupActivity = async (req, res) => {
        try {
            const groupId = req.query.group;

            const groupActivityProps = await groupDataService.getGroupActivity(groupId);

            if (!groupActivityProps) {
                return res.status(404).json({ error: "Group post not found" });
            }

            return res.status(200).json(groupActivityProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new GroupController();