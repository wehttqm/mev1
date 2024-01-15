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
        receive = Date.now()
        try {
            block = Number(hash.timestamp)
            console.log((receive / 1000) - block)
        } catch (err) {
            console.error(err)
        }
    });
};

main(); // THIS IS WHAT THE MEMPOOL LOOKS LIKE!