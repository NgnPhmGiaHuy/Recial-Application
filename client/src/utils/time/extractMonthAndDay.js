const extractMonthAndDay = (startDateTime) => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const date = new Date(startDateTime);
    const month = months[date.getMonth()];
    const day = date.getDate();

    return { month, day };
}

export default extractMonthAndDay;