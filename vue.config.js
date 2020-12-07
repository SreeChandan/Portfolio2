// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === "production" ? "/Portfolio2/" : "/",
  outputDir: "docs",
};
