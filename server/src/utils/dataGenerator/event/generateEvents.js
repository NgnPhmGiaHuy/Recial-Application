const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Event = require("../../../app/models/Event");

const generateEvents = async (numberOfEvents) => {
    const eventProps = Array.from({ length: numberOfEvents }, () => ({
        _id: new mongoose.Types.ObjectId(),
        event_name: faker.lorem.text(),
        event_color: faker.color.human(),
        event_privacy: faker.helpers.arrayElement(["Public", "Private"]),
        event_description: faker.lorem.paragraph(),
        event_start_datetime: faker.date.recent(),
        event_end_datetime: faker.date.future(),
        event_cover_picture_url: faker.image.urlLoremFlickr({ category: "abstract" }),
    }));

    try {
        await Event.insertMany(eventProps);

        console.log("Events generated successfully.")

        return eventProps;
    } catch (error) {
        return console.error("Error generating events: ", error);
    }
};

module.exports = generateEvents;