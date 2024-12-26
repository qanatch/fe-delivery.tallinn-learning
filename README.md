# Playwright API Testing Project
This project is for API testing using Playwright.
## Project Setup
1. Clone the repository: https://github.com/qanatch/fe-delivery.tallinn-learning
2. Install dependencies:  npm install
3. Set up environment variables: Create a .env file in the project root and add your URL:APP_URL=https://fe-delivery.tallinn-learning.ee/signin

## Run Tests
1. Run all tests: npx playwright test
2. Run tests in debug mode:npx playwright test --debug
3. Run tests on a specific browser engine (e.g., Chromium): npx playwright test --project=chromium
4. View test report: npx playwright show-report 