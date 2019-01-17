const path = require("path");
const withTypescript = require("next-with-typescript");


const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  webpack(config, {dev}) {
    const srcPath = "src";
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      "@components": path.resolve(__dirname, srcPath, "components"),
      "@containers": path.resolve(__dirname, srcPath, "containers"),
      "@static": path.resolve(__dirname, srcPath, "static"),
      "@core": path.resolve(__dirname, srcPath, "core"),
      "@pages": path.resolve(__dirname, dev ? "" : srcPath, "pages"),
    });
    return config;
  },
};

module.exports = withTypescript(nextConfig);
