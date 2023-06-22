const ethers = require('ethers');

// The ABI Code is partially taken from Arbitrum Inbox Smart Contract (https://goerli.etherscan.io/address/0x7522988bb327b89da2dbbe229b8191c159540847#code)
const inboxAbi = '[{"inputs":[],"name":"depositEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"}]';

// URL from Layer1 Node (Example: http://10.10.10.10:18545)
const l1ProviderUrl = ''; 
// Private Key from Layer1 Wallet (Those coins are going to be transfered to Layer2)
const l1PrivateKey = ''; 

// TransparentUpgradeableProxy (This is the start point before the coins are bridged to Layer2) 
const arbitrumInboxAddress = '0x6BEbC4925716945D46F0Ec336D5C2564F419682C';

console.log("Initializing JsonRPCProvider");

const l1Provider = new ethers.providers.JsonRpcProvider(l1ProviderUrl);
const l1Wallet = new ethers.Wallet(l1PrivateKey, l1Provider);
const inbox = new ethers.Contract(arbitrumInboxAddress, inboxAbi, l1Wallet);

// Amount to deposit
const value = ethers.utils.parseEther('0.00222'); 
// Gas Limit information taken from MetaMask. Till now every test produced 91,337 (98.96%).
const gasLimit = ethers.BigNumber.from('92295'); 

async function depositEthToL2() {
    // Send a deposit transaction
    let tx = await inbox.depositEth({ value, gasLimit });
    console.log(`Transaction hash: ${tx.hash}`);

    // Wait for the transaction to be mined
    await tx.wait();
    console.log('Transaction successfully mined.');
}

depositEthToL2().catch(console.error);