const shouldDisplayMessageWithTimeStamp = (message, prevMessage) => {
    if (!prevMessage) return false;

    const TIME_THRESHOLD_IN_MS = 30 * 60 * 1000; // 30 minutes

    const messageTime = new Date(message.createdAt).getTime();
    const prevMessageTime = new Date(prevMessage.createdAt).getTime();

    const timeDifference = messageTime - prevMessageTime;

    return timeDifference <= TIME_THRESHOLD_IN_MS;
};

export default shouldDisplayMessageWithTimeStamp;
