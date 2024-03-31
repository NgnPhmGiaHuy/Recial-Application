const formatTimestampForCover = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedYear = year < 10 ? '0' + year : year;
    const formattedHours = hours < 10 ? '0' + hours : hours;

    return `${formattedMonth}/${formattedDay}/${formattedYear}, ${formattedHours}:${minutes} ${ampm}`;
}

export default formatTimestampForCover;