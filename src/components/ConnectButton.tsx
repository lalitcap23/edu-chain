'use client';

import { useEffect, useState } from 'react';
import { Web3Modal } from '@web3modal/wagmi/react';

export default function ConnectButton() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = () => {
      if (window.ethereum || window.solana) {
        setIsConnected(true);
      }
    };

    checkConnection();
  }, []);

  return (
    <div>
      {isConnected ? (
        <button onClick={() => Web3Modal.open()} className="btn">
          Disconnect
        </button>
      ) : (
        <button onClick={() => Web3Modal.open()} className="btn">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
