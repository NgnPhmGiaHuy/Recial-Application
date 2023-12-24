const appearanceProperties = {
    appearance: {
        theme: {
            type: String,
            default: "Light",
            enum: ["Light", "Dark"],
        },
        font: {
            type: String,
        },
    }
};

module.exports = appearanceProperties;