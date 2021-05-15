const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", (contents) =>
        yaml.safeLoad(contents)
    );
    eleventyConfig.addPassthroughCopy("./src/CSS/");
    eleventyConfig.addWatchTarget("./src/CSS/");
    eleventyConfig.addPassthroughCopy("./src/pages/");
    eleventyConfig.addWatchTarget("./src/pages/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addWatchTarget("./src/images/");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
