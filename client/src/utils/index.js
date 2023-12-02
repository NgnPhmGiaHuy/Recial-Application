export const handleFormatNumber = (number) => {
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixIndex = 0;

    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
    }

    return number.toFixed(1) + suffixes[suffixIndex];
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en', { month: 'numeric' });
    const day = date.toLocaleString('en', { day: '2-digit' });

    return `${month}-${day}`;
};

export const formatDateTime = (startDatetime) => {
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedDate = new Date(startDatetime).toLocaleDateString("en-US", options);
    return formattedDate;
};

export const getMonthAndDay = (startDateTime) => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const date = new Date(startDateTime);
    const month = months[date.getMonth()];
    const day = date.getDate();

    return { month, day };
};
