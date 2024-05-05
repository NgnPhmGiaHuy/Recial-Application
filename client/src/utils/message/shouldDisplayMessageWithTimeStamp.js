const shouldDisplayMessageWithTimeStamp = (message, prevMessage) => {
    if (!prevMessage) return true;

    const TIME_THRESHOLD_IN_MS = 30 * 60 * 1000; // 30 minutes

    const messageTime = new Date(message.created_at).getTime();
    const prevMessageTime = new Date(prevMessage.created_at).getTime();

    const timeDifference = messageTime - prevMessageTime;

    return timeDifference >= TIME_THRESHOLD_IN_MS;
};

export default shouldDisplayMessageWithTimeStamp;
