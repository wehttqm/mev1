const { Web3 } = require('web3');
require('dotenv').config();

const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.LOCAL_RPC_WS));

const main = async () => {
    const subscription = await web3.eth.subscribe('newBlockHeaders', (err) => {
        if (err) {
            console.log(err)
        }
    });
    subscription.on('data', async (hash) => {
        try {
            const tx = await web3.eth.getTransaction(hash)
            console.log(`Hash: ${tx.hash} | Nonce: ${tx.nonce} | From: ${tx.from} | To: ${tx.to}`)
            //console.log(tx)
        } catch (err) {
            console.error(err)
        }
    });
};

main(); // THIS IS WHAT THE MEMPOOL LOOKS LIKE!