const getCurrentAndNextSixDaysOfWeekNames = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todayIndex = new Date().getDay();

    const currentAndNextSixDaysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const dayIndex = (todayIndex + i) % 7;
        currentAndNextSixDaysOfWeek.push(daysOfWeek[dayIndex]);
    }

    return currentAndNextSixDaysOfWeek;
}

export default getCurrentAndNextSixDaysOfWeekNames;