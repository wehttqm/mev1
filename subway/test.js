const { Web3 } = require('web3')
require('dotenv').config({path: '../.env'})
const provider = new Web3.providers.HttpProvider(process.env.INFURA_RPC)
const web3 = new Web3(provider)

const Sandwich = require('./build/Sandwich.json')
//console.log(Sandwich.storageLayout)

const payload = web3.eth.abi.encodeParameters(['address', 'address', 'uint128', 'uint128', 'uint8'],
[
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    1,
    2,
    3
])
console.log(payload)