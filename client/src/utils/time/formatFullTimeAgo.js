const formatFullTimeAgo = (timestamp) => {
    const currentDate = new Date();
    const updatedDate = new Date(timestamp);

    const timeDifference = currentDate - updatedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 1) {
        return `${years} years`;
    } else if (years === 1) {
        return `a year`;
    } else if (months > 1) {
        return `${months} months`;
    } else if (months === 1) {
        return `a month`;
    } else if (days > 7) {
        return `${Math.floor(days / 7)} weeks`;
    } else if (days > 1) {
        return `${days} days`;
    } else if (days === 1) {
        return `a day`;
    } else if (hours > 1) {
        return `${hours} hours`;
    } else if (hours === 1) {
        return `an hour`;
    } else if (minutes > 1) {
        return `${minutes} minutes`;
    } else {
        return `${seconds} seconds`;
    }
}

export default formatFullTimeAgo;