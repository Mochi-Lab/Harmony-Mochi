import { useState } from 'react';
import { Button, Badge, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { connectMetaMask } from 'Connections/metamask';
import MetaMaskLogo from 'Assets/metamask.svg';
import './index.css';

export default function ConnectWallet() {
  const walletAddress = useSelector((state) => state.walletAddress);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const connect = async () => {
    await connectMetaMask();
    setIsModalVisible(false);
  };

  return (
    <>
      <Button shape='round' onClick={showModal}>
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
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}>
        <div className='center wallet' onClick={() => connect()}>
          <img className='wallet-logo' src={MetaMaskLogo} alt='Metamask' />
          <p className='wallet-name textmode'>MetaMask</p>
          <p className='wallet-description textmode'>Connect to your MetaMask Wallet</p>
        </div>
      </Modal>
    </>
  );
}
