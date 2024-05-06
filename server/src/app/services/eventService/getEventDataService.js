const Event = require("../../models/Event");
const EventMember = require("../../models/EventMember");

const getRoleDataService = require("../roleService/getRoleDataService");
const getUserDataService = require("../userService/getUserDataService");

class GetEventDataService {
    getRawEventData = async (eventId) => {
        try {
            const eventData = await Event.findById(eventId);

            return eventData;
        } catch (error) {
            console.error("Error in getRawEventData: ", error);
            throw new Error("Failed to fetch raw event data");
        }
    }

    getFormattedEventDataById = async (eventId) => {
        try {
            const eventProps = await this.getRawEventData(eventId);
            const { createdAt, updatedAt, ...otherEventProps } = eventProps._doc;

            return {
                ...otherEventProps,
                created_at: createdAt,
                updated_at: updatedAt,
            };
        } catch (error) {
            console.error("Error in getFormattedEventDataById: ", error);
            throw new Error("Failed to format event data by eventId");
        }
    };

    getFormattedEventMemberDataById = async (eventId) => {
        try {
            const eventMemberData = await EventMember.find({ event_id: eventId });

            const eventMemberProps = await Promise.all(eventMemberData.map(async (member) => {
                const userData = await getUserDataService.getFormattedUserDataById(member.user.user_id)
                const roleData = await getRoleDataService.getRawRoleData(member.user.user_role);

                return {
                    user: {
                        profile: {
                            ...userData,
                        },
                        role: roleData.role_name,
                    },
                }
            }));

            return eventMemberProps;
        } catch (error) {
            console.error("Error in getFormattedEventMemberDataById: ", error);
            throw new Error("Failed to fetch event member data by eventId");
        }
    }

    getFormattedEventPageDataByUserId = async (userId) => {
        try {
            const eventMemberData = await EventMember.find({ "user.user_id": userId });

            const eventMemberProps = await Promise.all(eventMemberData.map(async (member) => {
                const eventData = await this.getFormattedEventDataById(member.event_id);
                const memberData = await this.getFormattedEventMemberDataById(eventData._id);

                return {
                    ...eventData,
                    members: [...memberData],
                }
            }));

            return eventMemberProps;
        } catch (error) {
            console.error("Error in getFormattedEventPageDataByUserId: ", error);
            throw new Error("Failed to format event page data");
        }
    };
}

module.exports = new GetEventDataService();