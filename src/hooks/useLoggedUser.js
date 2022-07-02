import { useEffect, useState } from 'react';
import { searchUser } from '../services/userService';

export default function useLoggedUser(token) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    searchUser(token)
      .then((res) => res.json())
      .then((res) => setUserInfo(res));
  }, []);

  return { userInfo };
}
