const apiUrl = process.env.REACT_APP_API_URL;

const getPost = async () => {
  const response = await fetch(`${apiUrl}posts`);

  return response.json();
};

const createPost = async (content, token) => {
  const data = {
    content,
  };

  const response = await fetch(`${apiUrl}posts`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

const deletePost = async (id, token) => {
  try {
    const response = await fetch(`${apiUrl}posts/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

const editPost = async (data, token) => {
  const response = await fetch(`${apiUrl}posts`, {
    method: 'PUT',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export {
  getPost, createPost, deletePost, editPost,
};
