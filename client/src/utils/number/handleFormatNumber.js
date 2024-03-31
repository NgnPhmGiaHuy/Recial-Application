const handleFormatNumber = (number) => {
    if (number === 0) return "";

    const suffixes = ["", "K", "M", "B", "T"];
    let suffixIndex = 0;

    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
    }

    const formattedNumber = typeof number === "number" ? number.toFixed(1) : number;

    return suffixIndex === 0 ? parseInt(formattedNumber, 10) : formattedNumber + suffixes[suffixIndex];
};

export default handleFormatNumber;