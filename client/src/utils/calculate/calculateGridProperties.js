const calculateGridProperties = (selectedImages) => {
    let imageGridAreas = [];
    let gridTemplateRowsValue = "";
    let gridTemplateColumnsValue = "";

    if (selectedImages.length === 1) {
        gridTemplateRowsValue = "100%";
        gridTemplateColumnsValue = "100%";
    } else if (selectedImages.length === 2) {
        gridTemplateColumnsValue = "1fr 1fr";
    } else if (selectedImages.length === 3) {
        gridTemplateRowsValue = "repeat(6, 1fr)";
        gridTemplateColumnsValue = "repeat(4, 1fr) 0fr 1fr";
        imageGridAreas = [
            "1 / 1 / 7 / 4",
            "1 / 4 / 4 / 7",
            "4 / 4 / 7 / 7",
        ];
    } else if (selectedImages.length === 4) {
        gridTemplateRowsValue = "repeat(6, 1fr)";
        gridTemplateColumnsValue = "repeat(4, 1fr) 0fr 1fr";
        imageGridAreas = [
            "1 / 1 / 7 / 4",
            "1 / 4 / 3 / 7",
            "3 / 4 / 5 / 7",
            "5 / 4 / 7 / 7",
        ];
    } else {
        gridTemplateRowsValue = "repeat(7, 1fr)";
        gridTemplateColumnsValue = "repeat(4, 1fr) 0fr repeat(2, 1fr)";
        imageGridAreas = [
            "1 / 1 / 5 / 4",
            "1 / 4 / 5 / 8",
            "5 / 1 / 8 / 3",
            "5 / 3 / 8 / 5",
            "5 / 6 / 8 / 8",
        ];
    }

    return { gridTemplateRowsValue, gridTemplateColumnsValue, imageGridAreas };
};

export default calculateGridProperties;