const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'Sandwich.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
      'Sandwich.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Sandwich.sol'];
fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(path.resolve(buildPath, contract + '.json'), output[contract]);
}