const Event = require("../../models/Event");
const EventMember = require("../../models/EventMember");

const getRoleDataService = require("../roleService/getRoleDataService");
const getUserDataService = require("../userService/getUserDataService");

class GetEventDataService {
    getRawEventData = async (eventId) => {
        return Event.findById(eventId);
    }

    getFormattedEventDataByEventId = async (eventId) => {
        const eventProps = await this.getRawEventData(eventId);

        const { createdAt, updatedAt, ...otherEventProps } = eventProps._doc;

        return {
            ...otherEventProps,
            created_at: createdAt,
            updated_at: updatedAt,
        }
    };

    getFormattedEventPageData = async (userId) => {
        const eventMemberProps = await EventMember.find({ "user.user_id": userId });

        return Promise.all(eventMemberProps.map(async (member) => {
            const eventData = await this.getFormattedEventDataByEventId(member.event_id);
            const memberData = await this.getEventMemberDataByEventId(eventData._id)
            return {
                ...eventData,
                members: [...memberData],
            }
        }))
    };

    getEventMemberDataByEventId = async (eventId) => {
        const eventMemberProps = await EventMember.find({ event_id: eventId });

        return Promise.all(eventMemberProps.map(async (member) => {
            const userData = await getUserDataService.getFormattedUserData(member.user.user_id)
            const roleData = await getRoleDataService.getRawRoleData(member.user.user_role);

            return {
                user: {
                    profile: {
                        ...userData,
                    },
                    role: roleData.role_name,
                },
            }
        }))
    }
}

module.exports = new GetEventDataService();