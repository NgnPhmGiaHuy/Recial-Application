const formatTime12Hour = (dateString) => {
    const date = new Date(dateString);
    const hours = (date.getHours() % 12 || 12);
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const period = (date.getHours() >= 12 ? 'pm' : 'am');

    return `${hours}:${minutes} ${period}`;
}

export default formatTime12Hour;