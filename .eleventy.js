module.exports = function (eleventyConfig) {
  ["css", "js", "img"].forEach((path) => {
    eleventyConfig.addPassthroughCopy(path);
  });

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
