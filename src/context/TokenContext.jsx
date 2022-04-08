import { createContext } from 'react';
import useTokenStorage from '../hooks/useTokenStorage';

const TokenContext = createContext({});

function useToken() {
  const { token, setToken } = useTokenStorage();

  return {
    token,
    setToken,
  };
}

export { TokenContext, useToken };
