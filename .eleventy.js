const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));
    eleventyConfig.addPassthroughCopy("./src/CSS/");
    eleventyConfig.addWatchTarget("./src/CSS/");
    eleventyConfig.addPassthroughCopy("./src/Javascript/");
    eleventyConfig.addWatchTarget("./src/Javascript/");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
}
