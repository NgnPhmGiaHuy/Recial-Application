const fs = require("fs");
const path = require("path");

const excludedFolders = ["node_modules", ".next"];

const scanDir = (directory) => {
    let results = [];
    const list = fs.readdirSync(directory);

    list.forEach((file) => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            if (!excludedFolders.includes(file)) {
                results = results.concat(scanDir(filePath));
            }
        } else if (
            filePath.endsWith(".js") ||
            filePath.endsWith(".jsx") ||
            filePath.endsWith(".tsx") ||
            filePath.endsWith(".ts")
        ) {
            results.push(filePath);
        }
    });

    return results;
};

const analyzeFile = (filePath) => {
    const content = fs.readFileSync(filePath, "utf8");

    const functionMatches = content.match(/function\s+\w+\s*\(|const\s+\w+\s*=\s*\(\s*.*?\)\s*=>/g) || [];
    const componentMatches = content.match(/export\s+default\s+/g) || [];
    const customHookMatches = content.match(/\buse[A-Z]\w*\b/g) || [];

    return {
        filePath,
        functions: functionMatches.length,
        components: componentMatches.length,
        customHooks: customHookMatches.length,
        functionNames: functionMatches.map(fn => fn.trim().split(/\s+/)[1] || 'Anonymous'),
        customHookNames: [...new Set(customHookMatches)],
    };
};

const scanProject = () => {
    const files = scanDir("./");
    let totalComponents = 0;
    let totalFunctions = 0;
    let totalCustomHooks = 0;
    let fileDetails = [];

    files.forEach((file) => {
        const { filePath, functions, components, customHooks, functionNames, customHookNames } = analyzeFile(file);
        totalFunctions += functions;
        totalComponents += components;
        totalCustomHooks += customHooks;


        fileDetails.push({
            filePath,
            functions,
            components,
            customHooks,
            functionNames,
            customHookNames
        });
    });

    return {
        totalComponents,
        totalFunctions,
        totalCustomHooks,
        totalFilesScanned: files.length,
        fileDetails,
    };
};

const analyzeDependencies = () => {
    const packageJsonPath = path.join(__dirname, "../package.json");
    if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        return {
            dependencies: Object.keys(packageJson.dependencies || {}),
            devDependencies: Object.keys(packageJson.devDependencies || {}),
        };
    }
    return { dependencies: [], devDependencies: [] };
};

const generateReport = () => {
    const projectAnalysis = scanProject();
    const { dependencies, devDependencies } = analyzeDependencies();

    const report = {
        totalComponents: projectAnalysis.totalComponents,
        totalFunctions: projectAnalysis.totalFunctions,
        totalCustomHooks: projectAnalysis.totalCustomHooks,
        totalFilesScanned: projectAnalysis.totalFilesScanned,
        fileDetails: projectAnalysis.fileDetails,
        dependencies: {
            count: dependencies.length,
            list: dependencies,
        },
        devDependencies: {
            count: devDependencies.length,
            list: devDependencies,
        },
    };

    const outputFile = path.join(__dirname, "json", "frontend-report.json");
    fs.writeFileSync(outputFile, JSON.stringify(report, null, 2), "utf8");
    console.log(`Front-end code analysis report saved to ${outputFile}`);
};

generateReport();
