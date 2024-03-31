const formatCurrentWeekday = (inputDate) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dateObj = new Date(inputDate);
    const day = dateObj.getDate() || "DD";
    const suffix = (day === 1 || day === 21 || day === 31) ? 'st' : (day === 2 || day === 22) ? 'nd' : (day === 3 || day === 23) ? 'rd' : 'th';

    return `${weekdays[dateObj.getDay()]}, ${day}${suffix}`;

}

export default formatCurrentWeekday;