const handleCalculateUploadStatus = (videoProps, startTime) => {
    const uploadedSize = (videoProps.meta.size * videoProps.uploadProgress) / 100;
    const totalSize = videoProps.meta.size;
    const remainingSize = totalSize - uploadedSize;

    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000;
    const averageSpeed = uploadedSize / elapsedTime;

    const timeLeftSeconds = remainingSize / averageSpeed;
    const minutesLeft = Math.floor(timeLeftSeconds / 60);
    const secondsLeft = Math.round(timeLeftSeconds % 60);

    return `${(uploadedSize / (1024 * 1024)).toFixed(2)} MB/${(totalSize / (1024 * 1024)).toFixed(2)} MB uploaded... ${minutesLeft} minutes ${secondsLeft} seconds left`;
};

export default handleCalculateUploadStatus;