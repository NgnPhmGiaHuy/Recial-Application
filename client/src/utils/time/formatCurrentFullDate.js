const formatCurrentFullDate = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = date.getDate();
    const suffix = (day === 1 || day === 21 || day === 31) ? 'st' : (day === 2 || day === 22) ? 'nd' : (day === 3 || day === 23) ? 'rd' : 'th';

    return `${weekdays[date.getDay()]}, ${day}${suffix} ${date.getFullYear()}`;
}

export default formatCurrentFullDate;