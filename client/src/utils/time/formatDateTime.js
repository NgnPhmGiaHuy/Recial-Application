const formatDateTime = (startDatetime) => {
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    return new Date(startDatetime).toLocaleDateString("en-US", options);
};

export default formatDateTime;