import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const createUser = async (newUser) => {
  const response = await axios.post(`${apiUrl}user`, newUser);

  return response.data;
};

const searchUser = async (token) => {
  const response = await fetch('https://the-new-social-media-api-nfsedg.vercel.app/user', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return response;
};

export { createUser, searchUser };
