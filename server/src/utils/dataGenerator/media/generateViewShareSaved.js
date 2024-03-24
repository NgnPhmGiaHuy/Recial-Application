const generateViewShareSaved = async (name, model, allModels, allUsers) => {
    const viewShareSavedProps = Array.from({ length: 100000 }, () => {
        const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];

        const randomModel = allModels[Math.floor(Math.random() * allModels.length)];

        return {
            [`${name.toString().toLowerCase()}_id`]: randomModel._id,
            user_id: randomUser._id,
        };
    });

    try {
        await model.insertMany(viewShareSavedProps);

        return console.log(`${model} generated successfully.`);
    } catch (error) {
        return console.error(`Error generating ${model}:`, error);
    }
}

module.exports = generateViewShareSaved;