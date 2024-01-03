const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
require('dotenv').config();

const local = new HDWalletProvider(
    process.env.PRIVATE,
    process.env.LOCAL_RPC
);
const infura = new HDWalletProvider(
    process.env.PRIVATE,
    process.env.INFURA_RPC
)

const local_web3 = new Web3(local);
const infura_web3 = new Web3(infura)

const getTime = async (web3) => {
    const start = Date.now()
    try {
        result = await web3.eth.getBlock('latest')
        //console.log(result)
        //console.log(Number(result.number))
    } catch (e) {
        //console.log(e)
    }
    const end = Date.now()
    return (end - start)
};

const getBlock = async () => {
    local_time = await getTime(local_web3)
    infura_time = await getTime(infura_web3)
    console.log(`Local node took ${local_time} ms`)
    console.log(`Infura took ${infura_time} ms`)
}

getBlock()