const getEventDataService = require("../../services/eventService/getEventDataService");

class EventController {
    getEventData = async (req, res) => {
        try {
            const eventId = req.query.event;

            const eventProps = await getEventDataService.getFormattedEventDataById(eventId);

            if (!eventProps) {
                return res.status(404).json({ error: "Event not found" });
            }

            return res.status(200).json(eventProps);
        } catch (error) {
            console.error("Error in getEventData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    getEventPageData = async (req, res) => {
        try {
            const userId = req.userId;

            const eventProps = await getEventDataService.getFormattedEventPageDataByUserId(userId);

            if (!eventProps) {
                return res.status(404).json({ error: "Event not found" });
            }

            return res.status(200).json(eventProps);
        } catch (error) {
            console.error("Error in getEventPageData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    getEventMember = async (req, res) => {
        try {
            const eventId = req.query.event;

            const eventMemberProps = await getEventDataService.getFormattedEventMemberDataById(eventId);

            if (!eventMemberProps) {
                return res.status(404).json({ error: "Event member not found" });
            }

            return res.status(200).json(eventMemberProps);
        } catch (error) {
            console.error("Error in getEventMember: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
}

module.exports = new EventController();