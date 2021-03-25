import Web3 from 'web3';

export const web3Default = {
  // //BSC Mainnet
  // 56: {
  //   web3Default: new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')),
  //   name: 'Binance Mainnet',
  // },
  // //BSC Testnet
  // 97: {
  //   web3Default: new Web3(
  //     new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s2.binance.org:8545/')
  //   ),
  //   name: 'Binance Testnet',
  // },
  //Hmy Mainnet shard 0
  1666700000: {
    web3Default: new Web3(new Web3.providers.HttpProvider('https://api.s0.b.hmny.io/')),
    name: 'Hamony Testnet',
  },
};

export const networkDefault = 1666700000;

export const getWeb3List = (_chainId) => {
  return web3Default[_chainId];
};
