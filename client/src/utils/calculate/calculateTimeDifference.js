const calculateTimeDifference = (date) => {
    const currentDate = new Date();
    const updatedDate = new Date(date);
    const timeDifference = currentDate.getTime() - updatedDate.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);

    let text = '';
    if (secondsDifference < 60) {
        text = `${secondsDifference} seconds ago`;
    } else if (secondsDifference < 3600) {
        text = `${Math.floor(secondsDifference / 60)} minutes ago`;
    } else if (secondsDifference < 86400) {
        text = `${Math.floor(secondsDifference / 3600)} hours ago`;
    } else if (secondsDifference < 259200) {
        text = `${Math.floor(secondsDifference / 86400)} days ago`;
    } else if (secondsDifference < 2592000) {
        text = `${Math.floor(secondsDifference / 86400 / 30)} months ago`;
    } else {
        text = `${Math.floor(secondsDifference / 86400 / 365)} years ago`;
    }

    return text;
};

export default calculateTimeDifference;