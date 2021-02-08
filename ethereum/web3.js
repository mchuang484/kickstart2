import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider);

let web3;
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
// We are in the browser and Metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
// We are on the server
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/72458c1db9974f12864962de5dc0153f');
    web3 = new Web3(provider);
}


export default web3;