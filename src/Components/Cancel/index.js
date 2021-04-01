import 'Views/DetailNFT/style.css';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { cancelSellOrder } from 'store/actions';
import LoadingModal from 'Components/Loading';
import { useState } from 'react';

export default function Cancel({ orderDetail }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const cancel = async () => {
    setVisible(true);
    await dispatch(cancelSellOrder(orderDetail));
    setVisible(false);
  };

  return (
    <div className='actions-btn'>
      <div className='gSzfBw'>
        <LoadingModal title={'Cancel'} visible={visible} />
        <Button type='primary' shape='round' size='large' onClick={cancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
