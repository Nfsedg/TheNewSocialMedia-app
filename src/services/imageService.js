const apiUrl = process.env.REACT_APP_API_URL;
// Working on API endpoints
const getImage = async ({ imageId }) => {
  const response = await fetch(`${apiUrl}upload/${imageId}`);

  return response.json();
};

const postImage = async ({ token, form }) => {
  const response = await fetch('http://localhost:3005/upload/', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
    },
    mode: 'cors',
    referrerPolicy: 'no-referrer',
    body: form,
  });

  return response;
};

const updateImage = async ({ token, form }) => {
  const response = await fetch('http://localhost:3005/upload/', {
    method: 'PUT',
    headers: {
      Authorization: `bearer ${token}`,
    },
    body: form,
  });

  return response;
};

export { getImage, postImage, updateImage };
