const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en", { month: "numeric" });
    const day = date.toLocaleString("en", { day: "2-digit" });

    return `${month}-${day}`;
}

export default formatDate;