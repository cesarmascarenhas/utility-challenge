module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        alias: {
          "@Controllers": "./app/controllers",
          "@Components": "./app/components",
          "@UI": "./app/ui",
          "@Assets": "./app/assets",
          "@Types": "./app/types",
          "@Helpers": "./app/helpers",
          "@Context": "./app/context",
          "@Views": "./app/views"
        },
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
  ],
};
};
