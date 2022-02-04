* Get started
  * Prerequisites
  * Installation
  * Folder Structure
  

* How to run the tests
  * Test exection
  * Generate HTML report using Mochawesome
  
  
### Prerequisites

- [Node.js](https://nodejs.org/) - Should be installed in the machine
- Clone the repository : git clone https://github.com/navya2207/CypressDemo.git

### Installation 

- Install Visual Studio Code

 Install dependencies:
 
- npm install
- npm install cypress --save-dev
- npm install mochawesome --save-dev
- npm install mochawesome-merge --save-dev
- npm install mochawesome-report-generator --save-dev 

### Folder Structure

- `Fixtures`,  To maintain the test data.
- `Integration`, To maintain the 'Page Objects', 'Specs' files which hold the test cases.
- `Plugins` contains the events listeners. Logs the events.
- `Screenshot` failure screenshots are stored
- `Support` contains reusable scripts
- `Videos` contains videos (in this script setting is made false)
- `node_modules` dependencies installed 
- `cypress.json` Cypress configurations. Overide default values
- `package.json` contains scripts and dependency information
- `jsonfiles` contains reports in json format
- `FinalReport` contains Final html Report of Test Cases

## How to run the tests

### Test exection
  ```
  npm run myrun (headless)
  ```
  ```
  npm run chrome (headed)
  ```
  #### 'OR'
  ### Run tests on UI mode
  ```
  npm run open
  ```
### Generate HTML report

 - `npm run myrun` - This script generates json reports
 - `npm run merge` - This script generates combined json report by taking all json files present in "jsonfiles" folder
 - `npm run report` - This script generates html report in "FinalReport" folder by taking combined json file as input
