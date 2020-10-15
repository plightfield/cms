module.exports = function override(config) {
  let loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf))
    .oneOf;
  loaders.unshift({
    test: /\.ejs$/,
    use: [require.resolve("raw-loader")],
  });
  return config;
};
