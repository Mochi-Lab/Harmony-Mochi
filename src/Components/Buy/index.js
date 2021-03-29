import 'Views/DetailNFT/style.css';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { buyNft } from 'store/actions';
import LoadingModal from 'Components/Loading';
import { useState } from 'react';

export default function Buy({ orderDetail }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const buy = async () => {
    setVisible(true);
    await dispatch(buyNft(orderDetail));
    setVisible(false);
  };

  return (
    <div className='actions-btn'>
      <div className='gSzfBw'>
        <LoadingModal title={'Buy'} visible={visible} />
        <Button type='primary' shape='round' size='large' onClick={buy}>
          Buy now
        </Button>
      </div>
    </div>
  );
}
