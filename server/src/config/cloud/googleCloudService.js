const { Storage } = require("@google-cloud/storage");
const path = require("path");

const googleCloud = new Storage({
    keyFilename: path.join(__dirname, "./rock-drake-399814-9b8c1b3a2eef.json"),
    projectId: "rock-drake-399814",
});

async function uploadFile(bucketName, filePath) {
    try {
        const bucket = googleCloud.bucket(bucketName);
        await bucket.upload(filePath, {
            destination: path.basename(filePath),
        });
        console.log(`${filePath} uploaded to ${bucketName}.`);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

async function listFiles(bucketName) {
    try {
        const [files] = await googleCloud.bucket(bucketName).getFiles();
        console.log('Files:');
        files.forEach(file => {
            console.log(file.name);
        });
    } catch (error) {
        console.error('Error listing files:', error);
    }
}

module.exports = {uploadFile, listFiles};