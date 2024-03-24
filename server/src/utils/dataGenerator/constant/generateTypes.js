const mongoose = require("mongoose");

const Type = require("../../../app/models/Type");

const generateTypes = async () => {
    const typeProps = [
        { _id: new mongoose.Types.ObjectId(), type_name: "Video", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Post", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Comment", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Photo", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Story", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Page", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Group", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Like", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Dislike", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Happiness", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Unhappiness", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Message", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Announcement", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Security", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Setting", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Share", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Friend-Request", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Mention", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Follower", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Event", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Trending", type_description: "description_here" },
        { _id: new mongoose.Types.ObjectId(), type_name: "Report", type_description: "description_here" },
    ];

    try {
        await Type.insertMany(typeProps);

        console.log("Types generated successfully.");

        return typeProps;
    } catch (error) {
        return console.error("Error generating types:", error);
    }
}

module.exports = generateTypes;
