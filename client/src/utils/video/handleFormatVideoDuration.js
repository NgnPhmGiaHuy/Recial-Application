const handleFormatVideoDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const formattedHours = hours > 0 ? `${hours}h` : "";
    const formattedMinutes = minutes > 0 ? `${minutes}m` : "";
    const formattedSeconds = secs > 0 ? `${secs}s` : "";

    return `${formattedHours}${formattedMinutes}${formattedSeconds}` || "0s";
}

export default handleFormatVideoDuration;