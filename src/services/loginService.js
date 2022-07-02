const apiUrl = process.env.REACT_APP_API_URL;

const loginService = async ({ username, password }) => {
  const userData = {
    username,
    password,
  };

  const response = await fetch(`${apiUrl}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  } else {
    window.sessionStorage.setItem('TOKEN_USER_SOCIAL', JSON.stringify(data));
  }

  return data;
};

export default loginService;
