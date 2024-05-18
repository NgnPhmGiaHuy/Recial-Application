const Comment = require("../../models/Comment");

const createPhotoDataService = require("../mediaService/createPhotoDataService");

class CreateCommentDataService {
    createCommentData = async (comment) => {
        try {
            const photo = comment.comment_content_url
                ? await createPhotoDataService.createPhotoData({ photo_url: comment.comment_content_url })
                : null;

            const newCommentData = new Comment({
                source_id: comment.source_id,
                comment_text: comment.comment_text,
                destination_id: comment.destination_id,
            });

            if (photo) {
                newCommentData["comment_content_url"] = photo._id;
            }

            await newCommentData.save();

            return newCommentData;
        } catch (error) {
            console.error("Error in createCommentData: ", error);
            throw new Error("Failed to create comment");
        }
    }
}

module.exports = new CreateCommentDataService();