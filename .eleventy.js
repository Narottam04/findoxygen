const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", (contents) =>
        yaml.safeLoad(contents)
    );
    eleventyConfig.addPassthroughCopy("./src/CSS/");
    eleventyConfig.addWatchTarget("./src/CSS/");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
