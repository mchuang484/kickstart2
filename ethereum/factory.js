import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xDa417F6b26Acb01BB77a40d9D3CfBa47C1472b5d'
);

export default instance;