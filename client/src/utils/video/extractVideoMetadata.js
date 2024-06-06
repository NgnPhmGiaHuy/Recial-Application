const extractVideoMetadata = (file, callback) => {
    const videoElement = document.createElement("video");
    videoElement.src = URL.createObjectURL(file);

    videoElement.onloadedmetadata = () => {
        const { videoWidth, videoHeight, duration } = videoElement;
        const aspectRatio = (videoWidth / videoHeight).toFixed(2);

        videoElement.currentTime = 1;

        videoElement.onseeked = () => {
            const canvas = document.createElement("canvas");
            canvas.width = videoWidth;
            canvas.height = videoHeight;
            const context = canvas.getContext("2d");
            context.drawImage(videoElement, 0, 0, videoWidth, videoHeight);

            const thumbnail = canvas.toDataURL("image/png");

            const videoMeta = {
                name: file.name,
                size: file.size,
                format: file.type,
                privacy: "Followers",
                duration: duration,
                resolution: `${videoWidth}x${videoHeight}`,
                aspectRatio: aspectRatio,
                description: file.name,
                interaction: {
                    allow_duet: true,
                    allow_stitch: true,
                    allow_comments: true,
                }
            };

            callback(videoMeta, file, thumbnail);
            URL.revokeObjectURL(videoElement.src);
        };
    };
};


export default extractVideoMetadata;