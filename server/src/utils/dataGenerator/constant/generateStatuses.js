const mongoose = require("mongoose");

const Status = require("../../../app/models/Status");

const generateStatuses = async () => {
    const statusProps = [
        { _id: new mongoose.Types.ObjectId(), status_name: "Pending", status_description: "The message has been created but not yet sent." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Sent", status_description: "The message has been sent from the sender's device." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Delivered", status_description: "The message has been successfully delivered to the recipient's device." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Read", status_description: "The recipient has opened and read the message." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Failed", status_description: "The message delivery failed due to some technical issue." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Draft", status_description: "The message is saved as a draft and hasn't been sent yet." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Archived", status_description: "The message has been archived and is no longer visible in the active conversation." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Deleted", status_description: "The message has been deleted by either the sender or the recipient." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Scheduled", status_description: "The message is scheduled to be sent at a specific time in the future." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Edited", status_description: "The message has been edited since it was initially sent." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Muted", status_description: "The conversation has been muted, and notifications are suppressed." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Pinned", status_description: "The message or conversation has been pinned for quick access." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Unread", status_description: "The message has not been read by the recipient yet." },
        { _id: new mongoose.Types.ObjectId(), status_name: "Blocked", status_description: "The user or conversation has been blocked, preventing further communication." },
        { _id: new mongoose.Types.ObjectId(), status_name: "MarkedSpam", status_description: "The message or conversation has been marked as spam." },
    ]

    try {
        await Status.insertMany(statusProps);

        console.log("Status generated successfully.");

        return statusProps;
    } catch (error) {
        return console.error("Error generating status: ", error);
    }
};

module.exports = generateStatuses;