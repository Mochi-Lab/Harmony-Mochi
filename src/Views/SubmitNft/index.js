import { useState } from 'react';
import { Button, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { registerNft } from 'store/actions';
import './index.css';
import { useSelector } from 'react-redux';

export default function SubmitNFT() {
  const { walletAddress } = useSelector((state) => state);
  const [contractAddress, setContractAddress] = useState('');
  const dispatch = useDispatch();
  const register = ({ isERC1155 }) => {
    if (!!walletAddress) dispatch(registerNft(contractAddress, isERC1155));
    else message.warn('Please login before submit');
  };

  return (
    <div className='create-page'>
      <div className='steps-content '>
        <div>
          <p className='get-listed'>Enter your contract address</p>
          <p className='select-network'>What is the address of your HRC721 ?</p>
          <div>
            <Input
              className='input-address input-mode-bc'
              size='large'
              placeholder='Enter your HRC721 contract address'
              onChange={(event) => setContractAddress(event.target.value)}
            />
          </div>

          <Button
            type='primary'
            onClick={() => register({ isERC1155: false })}
            shape='round'
            size='large'
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
