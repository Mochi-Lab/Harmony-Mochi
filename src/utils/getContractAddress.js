const contractAddress = {
  //Hmy Testnet shard 0
  1666700000: {
    AddressesProvider: '0x8cb1D7B963dEC0ceC61C5b1461C9f6c80d2b6e4F',
    NftList: '0x2F87eDdb0Eb24ae392a388E2a7D7979E91a0a2e5',
    Vault: '0xf0A0D4903b574FfAa431d8Db581a6eFcC7536F69',
    SellOrderList: '0xb0fa84bE32306974Ca36e7EdB792FC2cc48b37B2',
    Market: '0xD33F1eCC35166EF98b875656c9A9DE6378188240',
    CreativeStudio: '0x15AF81D1e9dd377F1553d43e1e157bb5390f1213',
    ExchangeOrderList: '0xC0E57ef28075df5fe191Cf003b68244f41A3BED6',
    Mochi: '0x4aDC84334C9Be1c8b8862d814430A640C9C752e0',
  },
};

export const getContractAddress = (_chainId) => {
  return contractAddress[_chainId];
};
