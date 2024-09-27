const fs = require("fs");
const path = require("path");

const EXCLUDE_FOLDERS = ["node_modules", ".next", ".git", "dist", ".DS_Store"];

const scanFolderStructure = (directory) => {
    const structure = {};
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (EXCLUDE_FOLDERS.includes(file)) return;

        if (stat.isDirectory()) {

            structure[file] = scanFolderStructure(filePath);
        } else {

            structure[file] = "file";
        }
    });

    return structure;
};

const scanProject = () => {
    const folderStructure = scanFolderStructure("./");
    const outputFilePath = path.join(__dirname, "json", "folder-structure.json");

    fs.writeFileSync(outputFilePath, JSON.stringify(folderStructure, null, 2), "utf8");
    console.log(`Folder structure saved to ${outputFilePath}`);
};

scanProject();
