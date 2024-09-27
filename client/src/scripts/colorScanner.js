const fs = require("fs");
const path = require("path");

const scanDir = (directory) => {
    let results = [];
    const list = fs.readdirSync(directory);
    list.forEach((file) => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(scanDir(filePath));
        } else if (filePath.endsWith(".js") || filePath.endsWith(".jsx") || filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
            results.push(filePath);
        }
    });
    return results;
};

const colorUtilities = [
    "bg", "text", "border", "fill", "stroke", "shadow", "ring", "outline"
];

const tailwindColors = [
    "red", "blue", "green", "yellow", "purple", "pink", "indigo", "gray", "orange", "teal", "cyan",
    "amber", "lime", "emerald", "violet", "rose", "fuchsia", "zinc", "neutral", "slate", "stone", "sky"
];

const colorRegex = new RegExp(`(${colorUtilities.join("|")})-(?:\\[\\#([0-9a-fA-F]{6,8})\\]|(${tailwindColors.join("|")})-(\\d{1,3}))`, "g");

const findCustomColors = (fileContent) => {
    let match;
    const colors = {};

    while ((match = colorRegex.exec(fileContent)) !== null) {
        const colorClass = match[0];
        colors[colorClass] = (colors[colorClass] || 0) + 1;
    }

    return colors;
};

const scanForColors = () => {
    const files = scanDir("./");
    let colorOccurrences = {};

    files.forEach((file) => {
        const content = fs.readFileSync(file, "utf8");
        const foundColors = findCustomColors(content);

        for (const color in foundColors) {
            colorOccurrences[color] = (colorOccurrences[color] || 0) + foundColors[color];
        }
    });

    return colorOccurrences;
};

const saveColorData = (colorOccurrences) => {
    const outputFile = path.join(__dirname, "json", "color-usage.json");
    fs.writeFileSync(outputFile, JSON.stringify(colorOccurrences, null, 2), "utf8");
    console.log(`Color usage data saved to ${outputFile}`);
};

const colorOccurrences = scanForColors();
saveColorData(colorOccurrences);
