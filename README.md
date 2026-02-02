Node.js Minimal CI/CD Pipeline Project

This project demonstrates a minimal Continuous Integration and Continuous Deployment (CI/CD) pipeline using a Node.js Express application, Jest automated tests, and GitHub Actions. The pipeline automatically installs dependencies, runs tests, and executes a build stage on every code push.

Project Purpose:
The goal of this project is to show how a CI/CD pipeline validates application behavior automatically using automated tests and build steps triggered by GitHub Actions.

Core Features:
- Minimal Node.js Express API
- Automated endpoint test using Jest and Supertest
- GitHub Actions CI/CD pipeline
- Automatic dependency installation
- Automated test execution on every push
- Build stage simulation for CD
- Clean DevOps-ready project structure

Tech Stack:
- Node.js
- Express
- Jest
- Supertest
- GitHub Actions
- VS Code

Project Structure:
- app.js → Express application
- test/app.test.js → Automated API test
- package.json → Dependencies and scripts
- package-lock.json → Dependency lock file
- .github/workflows/ci.yml → CI/CD pipeline config
- .gitignore → Ignored folders (node_modules, env)
- README.md → Project documentation

Application Behavior:
The app exposes a single endpoint:

GET /
Returns:
{"message":"Node CI/CD App Running"}

Local Setup:

Initialize project:
npm install

Run tests:
npm test

Run application:
npm start

Open browser:
http://localhost:3000

Expected output:
{"message":"Node CI/CD App Running"}

CI/CD Pipeline Flow:
Code push → GitHub Actions triggers → Node setup → npm install → Jest tests run → build stage executes → pipeline pass/fail reported.

CI/CD Workflow Steps:
- Checkout repository
- Setup Node runtime
- Install dependencies
- Run automated tests
- Execute build stage

Interview Explanation:
This project implements a minimal CI/CD pipeline where every push triggers automated Jest tests and build steps using GitHub Actions, ensuring application correctness before deployment stages.

Future Enhancements:
- Add Docker build stage
- Add automatic container deployment
- Add coverage reports
- Add lint stage
- Add staging deployment step

Author:
Yashwanth SV

License:
Educational and practice project.
