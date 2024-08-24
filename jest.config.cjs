const dotenv = require("dotenv");

// Retrieve environment variable or default to 'qa'
const environment = process.env.NODE_ENV || "qa";

// Load environment-specific configuration
dotenv.config({ path: `config-files/.env.${environment}` });

// Export Jest configuration using ES module syntax
module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest",
  },
  testMatch: ["**/specs/*.spec.js"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./report", // Report directory
        filename: "report.html", // Report file name
        pageTitle: "Test Report", // Report title
        customInfos: [
          {
            title: "Personal Project",
            value: "https://jira.com",
          },
          {
            title: "Environment",
            value: environment,
          },
        ], // Custom information
        overwrite: true, // Enable report file overwrite
        expand: true, // Enable report file expansion
      },
    ],
  ],
};
