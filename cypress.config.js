const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4b479h",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {},
  },
});
