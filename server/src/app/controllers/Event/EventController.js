const getEventDataService = require("../../services/eventService/getEventDataService");

class EventController {
    getEventData = async (req, res) => {
        try {
            const eventId = req.query.event;

            const eventProps = getEventDataService.getFormattedEventDataByEventId(eventId);

            if (!eventProps) {
                return res.status(404).json({ error: "Event not found" });
            }

            return res.status(200).json(eventProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    getEventPageData = async (req, res) => {
        try {
            const userId = req.userId;

            const eventProps = await getEventDataService.getFormattedEventPageData(userId);

            if (!eventProps) {
                return res.status(404).json({ error: "Event not found" });
            }

            return res.status(200).json(eventProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    getEventMember = async (req, res) => {
        try {
            const eventId = req.query.event;

            const eventMemberProps = getEventDataService.getEventMemberDataByEventId(eventId);

            if (!eventMemberProps) {
                return res.status(404).json({ error: "Event member not found" });
            }

            return res.status(200).json(eventMemberProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}

module.exports = new EventController();