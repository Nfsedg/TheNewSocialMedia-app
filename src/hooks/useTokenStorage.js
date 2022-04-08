import { useEffect, useState } from 'react';

const useTokenStorage = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    if (!token) {
      const tokenFromStorage = window.localStorage.getItem('TOKEN_USER_SOCIAL');
      setToken(JSON.parse(tokenFromStorage));
    }
  }, []);

  return {
    token,
    setToken,
  };
};

export default useTokenStorage;
