const path = require("path");

module.exports = {
  entry: "./src/ListBuilder.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "list-builder.js",
    library: "ListBuilder",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
