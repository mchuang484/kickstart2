const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'turtle scan draw rapid flag similar wonder breeze mix venture erosion either'



const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')
//const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/72458c1db9974f12864962de5dc0153f');

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    
    console.log('Contract deployed to', result.options.address);
}

deploy();

