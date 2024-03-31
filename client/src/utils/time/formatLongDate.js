const formatLongDate = (inputDate) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const dateObj = new Date(inputDate);
    const month = months[dateObj.getMonth()] || "MM";
    const day = dateObj.getDate() || "DD";
    const year = dateObj.getFullYear() || "YYYY";

    return `${month} ${day}, ${year}`;
}

export default formatLongDate;