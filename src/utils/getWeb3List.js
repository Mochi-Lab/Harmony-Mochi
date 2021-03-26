import Web3 from 'web3';

export const web3Default = {
  //Hmy Testnet shard 0
  1666700000: {
    web3Default: new Web3(new Web3.providers.HttpProvider('https://api.s0.b.hmny.io/')),
    name: 'Hamony Testnet',
    explorer: 'https://explorer.pops.one/#/tx/',
  },
};

export const networkDefault = 1666700000;

export const getWeb3List = (_chainId) => {
  return web3Default[_chainId];
};
