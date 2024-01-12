module.exports = {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        // other polyfills if needed
      },
    },
    // additional custom configurations
  };