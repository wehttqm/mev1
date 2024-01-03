const { Web3 } = require('web3')
const ethers = require('ethers')
require('dotenv').config({path: '../.env'})
const address = '0xfcF553a184CC87e377A5f9F254460416Db98F5B2'
const CompiledSandwich = require('./build/Sandwich.json')
const provider = new Web3.providers.HttpProvider(process.env.SEPOLIA_RPC)
const web3 = new Web3(provider)

const main = async () => {
    try {
        const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE)
        web3.eth.accounts.wallet.add(signer)
        const sandwich = new web3.eth.Contract(CompiledSandwich.abi, address)
        let value = await sandwich.methods.getx().call()
        console.log(`Before: ${value}`)

        const payload = web3.eth.abi.encodeParameters(['uint256'],[11])
        console.log(payload)

        receipt = await web3.eth.sendTransaction({
            from: signer.address,
            to: address,
            data: payload,
            gas: 1400000
        })
        .on('transactionHash', (hash) => {
            console.log(`https://sepolia.etherscan.io/tx/${hash}`)
        })
        value = await sandwich.methods.getx().call()
        console.log(`After: ${value}`)

    } catch (err) {
        console.log(err)
    }
}

main()