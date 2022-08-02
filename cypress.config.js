const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    issuePrefix: 'https://your.domain.atlassian.net/browse/',
    tmsPrefix: 'https://some.testrail.instance/path/suite/caseID-',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
