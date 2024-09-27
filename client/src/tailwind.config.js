/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#A3E635",
                    default: "#65A30D",
                    dark: "#166534",
                },
                secondary: {
                    light: "#E2E8F0",
                    default: "#71717A",
                    dark: "#3F3F46",
                },
                neutral: {
                    light: "#F3F4F6",
                    default: "#E5E7EB",
                    dark: "#D1D5DB",
                },
                danger: {
                    default: "#EF4444",
                    light: "#F87171",
                },
                accent: {
                    lime: "#A3E635",
                    zinc: "#71717A",
                    amber: "#F59E0B",
                    red: "#EF4444",
                    blue: "#3B82F6",
                    gray: "#6B7280",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addVariant, matchUtilities, addUtilities, theme }) {
            addBase({});
            addComponents({
                ".flex-center": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                ".flex-between": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                },
                ".overflow-overlay": {
                    overflowY: "overlay",
                },
                ".absolute-full": {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                },
            });
            matchUtilities(
                {
                    sq: value => ({
                        height: value,
                        width: value,
                    }),
                },
                { values: theme("spacing") }
            );
            const newUtilities = {
                ".horizontal-tb": {
                    writingMode: "horizontal-tb",
                },
                ".vertical-rl": {
                    writingMode: "vertical-rl",
                },
                ".vertical-lr": {
                    writingMode: "vertical-lr",
                },
            };
            addUtilities(newUtilities);
            addVariant("optional", "&:optional");
            addVariant("hocus", ["&:hover", "&:focus"]);
            addVariant("supports-grid", "@supports (display: grid)");
        }),
        plugin(({ addVariant, e }) => {
            addVariant("rem", ({ container, separator }) => {
                const rootFontSize = 19.2;
                container.walkRules((rule) => {
                    rule.selector = `.${e(`rem${separator}`)}${rule.selector.slice(1)}`;
                    rule.walkDecls((decl) => {
                        if (decl.value.includes("px")) {
                            const value = decl.value.replace(/(\d+)px/g, (match, p1) => `${p1 / rootFontSize}rem`);
                            decl.value = value;
                        }
                    });
                });
            });
        }),
        plugin(({ addVariant, e }) => {
            addVariant("ratio", ({ container, separator }) => {
                container.walkRules((rule) => {
                    rule.selector = `.${e(`ratio${separator}`)}${rule.selector.slice(1)}`;
                    rule.walkDecls((decl) => {
                        const ratioValues = decl.value.split(" ");
                        if (ratioValues.length === 2) {
                            const num1 = parseInt(ratioValues[0]);
                            const num2 = parseInt(ratioValues[1]);
                            if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
                                const percentage = `${(num1 / num2) * 100}%`;
                                decl.value = percentage;
                            }
                        }
                    });
                });
            });
        }),
    ],
}
