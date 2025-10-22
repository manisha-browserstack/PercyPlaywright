// browserstack.config.js
module.exports = {
  username: process.env.BROWSERSTACK_USERNAME,
  accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
  project: "Percy Integration Demo",
  build: "Percy Playwright Sample",
  browsers: [
    { os: "Windows", osVersion: "11", browserName: "chrome", browserVersion: "latest" },
    { os: "Windows", osVersion: "11", browserName: "firefox", browserVersion: "latest" }
  ],
  playwrightOptions: {
    headless: true
  }
};
