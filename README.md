# Percy + Playwright Sample Project

This sample demonstrates how to run a Playwright test and integrate it with Percy for visual testing.

## 🧰 Setup

1. **Install dependencies**
   ```bash
   npm install
   npm install --save-dev @playwright/test      
   npx playwright install      
   ```

2. **Set your Percy token**
   ```bash
   export PERCY_TOKEN=<your_token_here>
   ```

3. **Run the test with Percy**
   ```bash
   npm run percy-test
   ```

4. **Run without Percy (just Playwright)**
   ```bash
   npx percy exec -- npx playwright test ./tests/browserstack.test.js
   ```

## ☁️ Run on BrowserStack Automate

1. Set your environment variables:
   ```bash
   export BROWSERSTACK_USERNAME=<your_username>
   export BROWSERSTACK_ACCESS_KEY=<your_access_key>
   export PERCY_TOKEN=<your_percy_token>
   ```

2. Run using BrowserStack SDK:
   ```bash
   
   npm install --save-dev browserstack-node-sdk

   npx browserstack-sdk --version

   npx browserstack-node-sdk playwright --config browserstack.yml

   

   ```
