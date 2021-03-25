import { Button, Badge } from 'antd';
// import { connectWeb3Modal } from 'Connections/web3Modal';
import { useSelector } from 'react-redux';
import { connectMetaMask } from 'Connections/metamask';

export default function ConnectWallet() {
  const walletAddress = useSelector((state) => state.walletAddress);

  const connect = () => {
    // connectWeb3Modal();
    connectMetaMask();
  };

  return (
    <>
      <Button shape='round' onClick={() => connect()}>
        {!!walletAddress ? (
          <>
            <Badge status='success' />
            Change Wallet
          </>
        ) : (
          <>
            <Badge status='error' />
            Connect Wallet
          </>
        )}
      </Button>
    </>
  );
}
