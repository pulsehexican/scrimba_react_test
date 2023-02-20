
//import { useState } from 'react';
//import Web3 from 'web3';

function ETHBalance() {
  const [ethAddress, setEthAddress] = useState('');
  const [balance, setBalance] = useState('');

  const getBalance = async () => {
    const web3 = new Web3('https://rpc.ankr.com/eth');
    const balance = await web3.eth.getBalance(ethAddress);
    setBalance(web3.utils.fromWei(balance, 'ether'));
  };

  return (
    <div>
      <form onSubmit={getBalance}>
        <label>
          Ethereum Address:
          <input type="text" value={ethAddress} onChange={e => setEthAddress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Get Balance</button>
      </form>
      <br />
      <div>
        Balance: {balance}
      </div>
    </div>
  );
}

export default ETHBalance;

