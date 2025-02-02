# A collection of MEV testing programs, largely inspired by Solid Quant
Much of this repository is dedicated to testing performance differences between local vs. cloud-based Ethereum Mainnet RPCs. If you're interested in MEV, you'll need to choose between a locally hosted node and a cloud-based one from a company like Infura. 

## Specs
The main features of my node are an 8th gen Intel i5 processor, 2TB WD Black M.2 SSD, and 32 gigs of Corsair Vengeance DDR4-3200. This is what many would consider adequate for a node - any less than this and you run the risk of bottlenecking your node. 

## Results
I benchmarked the performance of the Tether transaction (benchTetherTransactionWS.py) and determined that my local node received the data 1.5-2x faster than Infura.

