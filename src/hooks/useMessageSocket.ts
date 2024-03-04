import { useRef, useEffect } from 'react';
import { Socket, io } from 'socket.io-client';

import { configuration } from '../constants/config';
import useBlocksStore from '../stores/useBlocksStore';

export const useMessageSocket = () => {
  const { addBlock } = useBlocksStore();
  const socket = useRef<Socket>();
  useEffect(() => {
    console.log("conneting socket", configuration.SOCKET_URL);
    socket.current = io(configuration.SOCKET_URL);
    socket.current.on('connect', () => {
      console.log("connected");
    });
    socket.current.on('new.block', (resp) => {
      addBlock(resp.data);

    });
    return () => {
      socket.current?.removeAllListeners();
      disconnect();
    };
  }, []);

  function disconnect() {
    socket.current?.disconnect();
  }

  return {};
};
