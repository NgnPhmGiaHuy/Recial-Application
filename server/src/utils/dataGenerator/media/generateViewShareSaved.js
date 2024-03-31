const generateViewShareSaved = async (modelName, name, model, allModels, allUsers, numberOfViewShareSaved) => {
    const viewShareSavedProps = Array.from({ length: numberOfViewShareSaved }, () => {
        const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];

        const randomModel = allModels[Math.floor(Math.random() * allModels.length)];

        return {
            user_id: randomUser._id,
            [`${name.toString().toLowerCase()}_id`]: randomModel._id,
        };
    });

    try {
        await model.insertMany(viewShareSavedProps);

        return console.log(`${modelName} generated successfully.`);
    } catch (error) {
        return console.error(`Error generating ${modelName}:`, error);
    }
}

module.exports = generateViewShareSaved;