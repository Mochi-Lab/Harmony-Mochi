import { useState } from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { registerNft } from 'store/actions';
import './index.css';

export default function SubmitNFT() {
  const [current, setCurrent] = useState(0);
  const [contractAddress, setContractAddress] = useState('');
  const dispatch = useDispatch();

  const prev = () => {
    setCurrent(current - 1);
  };

  const register = () => {
    dispatch(registerNft(contractAddress));
  };

  return (
    <div className='create-page'>
      <div className='steps-content '>
        <div>
          <p className='get-listed'>Enter your contract address</p>
          <p className='select-network'>What is the address of your ERC721 ?</p>
          <div>
            <Input
              className='input-address input-mode-bc'
              size='large'
              placeholder='Enter your ERC721 contract address'
              onChange={(event) => setContractAddress(event.target.value)}
            />
          </div>

          <Button style={{ margin: '0 8px' }} onClick={() => prev()} shape='round' size='large'>
            Previous
          </Button>
          <Button type='primary' onClick={() => register()} shape='round' size='large'>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
