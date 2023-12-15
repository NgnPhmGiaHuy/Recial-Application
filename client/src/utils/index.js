export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const checkPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (strongRegex.test(password)) {
        return 'strong';
    } else if (mediumRegex.test(password)) {
        return 'medium';
    } else {
        return 'weak';
    }
};

export const handleFormatNumber = (number) => {
    if (number === 0) return '';

    const suffixes = ["", "K", "M", "B", "T"];
    let suffixIndex = 0;

    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
    }

    const formattedNumber = typeof number === 'number' ? number.toFixed(1) : number;

    return suffixIndex === 0 ? parseInt(formattedNumber, 10) : formattedNumber + suffixes[suffixIndex];
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

export const formatTimeAgoShort = (timestamp) => {
    const currentDate = new Date();
    const updatedDate = new Date(timestamp);

    const timeDifference = currentDate - updatedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years}y`;
    } else if (months > 0) {
        return `${months}m`;
    } else if (days > 0) {
        return `${days}d`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    } else {
        return `${seconds}s`;
    }
}

export const formatTimeAgoFull = (timestamp) => {
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

export const calculateAttachmentStyles = (attachmentsLength, index) => {
    let insetStyles = {};
    let width = "none";
    let height = "none";

    switch (attachmentsLength) {
        case 2:
            if (index === 0) {
                width = '50%';
                height = '100%';
                insetStyles = { top: '0', left: '0' };
            } else if (index === 1) {
                width = '50%';
                height = '100%';
                insetStyles = { top: '0', right: '0' };
            }
            break;
        case 3:
            switch (index) {
                case 0:
                    width = '50%';
                    height = '100%';
                    insetStyles = { top: '0', left: '0' };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
        case 4:
            switch (index) {
                case 0:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', left: '0' };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', left: '0' };
                    break;
                case 3:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
        case 5:
            switch (index) {
                case 0:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', left: '0' };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', left: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 3:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: 'calc(100%/3)', right: '0' };
                    break;
                case 4:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
        default:
            switch (index) {
                case 0:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', left: '0' };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', left: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 3:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: 'calc(100%/3)', right: '0' };
                    break;
                case 4:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
                default:
                    width = "none";
                    height = "none"
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
    }

    return { insetStyles, width, height };
};
