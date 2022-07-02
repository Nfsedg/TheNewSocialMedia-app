import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const createUser = async (newUser) => {
  const response = await axios.post(`${apiUrl}user`, newUser);

  return response.data;
};

const searchUser = async (token) => {
  const response = await fetch(`${apiUrl}user`, {
    method: 'GET',
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return response;
};

const editUser = async (userUpdateData, token) => {
  const data = {
    biography: userUpdateData.biography,
    name: userUpdateData.name,
  };

  const response = await fetch(`${apiUrl}user`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};

export { createUser, searchUser, editUser };
