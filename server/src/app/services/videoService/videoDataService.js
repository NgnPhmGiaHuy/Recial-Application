const fs = require("node:fs");

const Video = require("../../models/Video");

class VideoDataService {
    getVideoData = async (videoId, range) => {
        try {
            if (!videoId) {
                throw new Error("Video ID not found");
            }

            const videoData = await Video.findById(videoId);

            if (!videoData) {
                throw new Error("Video not found");
            }

            const videoPath = videoData.video_url;
            const videoStat = fs.statSync(videoPath);
            const fileSize = videoStat.size;

            if (range) {
                const parts = range.replace(/bytes=/, "").split("-");
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                const chunkSize = (end - start) + 1;
                const stream = fs.createReadStream(videoPath, { start, end });
                const headers = {
                    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunkSize,
                    "Content-Type": "video/mp4"
                };
                return { statusCode: 206, headers, stream };
            } else {
                const headers = {
                    "Content-Length": fileSize,
                    "Content-Type": "video/mp4"
                };
                const stream = fs.createReadStream(videoPath);
                return { statusCode: 200, headers, stream };
            }
        } catch (error) {
            console.error("Error in getVideoData: ", error);
            throw new Error("Failed to get video data");
        }
    }

    getFormattedVideoDataById = async (videoId) => {
        try {
            const videoData = await Video.findById(videoId);

            const formattedVideoData = {
                _id: videoData._id,
                media_type: "Video",
                media_url: videoData.video_url,
                media_title: videoData.video_title,
                media_privacy: videoData.video_privacy,
                media_thumbnail: videoData.video_thumbnail,
                media_resolution: videoData.video_resolution,
                media_description: videoData.video_description,
                created_at: videoData.createdAt,
                updated_at: videoData.updatedAt,
            }

            return formattedVideoData;
        } catch (error) {
            console.error("Error in getFormattedVideoDataById: ", error);
            throw new Error("Failed to get video data.");
        }
    }
}

module.exports = new VideoDataService();