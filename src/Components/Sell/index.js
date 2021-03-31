import 'Views/DetailNFT/style.css';
import { Button, InputNumber } from 'antd';
import { useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { useParams } from 'react-router-dom';
import { createSellOrder } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
import one from 'Assets/one-coin.png';

import './index.css';
import LoadingModal from 'Components/Loading';

export default function Sell({ token }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState();
  const [visible, setVisible] = useState(false);
  const { addressToken, id } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { web3 } = useSelector((state) => state);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    setVisible(true);
    await dispatch(createSellOrder(addressToken, id, web3.utils.toWei(price.toString(), 'ether')));
    setVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    setPrice(e);
  };

  return (
    <>
      <LoadingModal title={'Sell'} visible={visible} />
      <div className='gSzfBw'>
        <Button type='primary' shape='round' size='large' onClick={showModal}>
          Sell
        </Button>
      </div>

      <Modal
        title={
          <h3 className='textmode' style={{ marginBottom: 0 }}>
            Sell order
          </h3>
        }
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='cancel' shape='round' size='large' onClick={() => handleCancel()}>
            Cancel
          </Button>,
          <Button key='sell' type='primary' shape='round' size='large' onClick={() => handleOk()}>
            Sell
          </Button>,
        ]}
      >
        <div className='sell-img'>
          <img alt='img-nft' src={token.image} />
          <p className='textmode'>{token.name}</p>
        </div>
        <div className='price-des'>
          <p className='textmode'>Price</p>

          <p className='textmode'>Will be on sale until you transfer this item or cancel it.</p>
        </div>
        <div style={{ display: 'flex' }}>
          <div className='center' style={{ height: 38, padding: '0px 10px 0px 10px' }}>
            <img className='bnb-coin' src={one} alt='bnb' />
          </div>
          <InputNumber
            size='large'
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            onChange={onChange}
            style={{ width: 250 }}
            placeholder='Set Price'
          />
        </div>
      </Modal>
    </>
  );
}
