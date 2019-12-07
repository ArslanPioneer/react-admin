const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addLessLoader(),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  })
);
