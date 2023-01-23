const path = require("path");

module.exports = [
  {
    entry: "./src/main.ts",
    output: {
      path: path.join(__dirname, "build"),
      filename: "main.js",
    },
    module: {
      rules: [
        { 
          test: /\.([cm]?ts|tsx)$/, 
          loader: "ts-loader" 
        },
        {
          test: /\.node$/,
          loader: "node-loader",
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      extensionAlias: {
       ".js": [".js", ".ts"],
       ".cjs": [".cjs", ".cts"],
       ".mjs": [".mjs", ".mts"]
      }
    },
    target: "node",
    node: {
      __dirname: false,
    },
  }
];