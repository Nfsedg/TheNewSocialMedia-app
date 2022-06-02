const apiUrl = process.env.REACT_APP_API_URL;

const getComments = async (postId, limit = 0, offset = 0) => {
  const response = await fetch(`${apiUrl}comments/${postId}/${limit}/${offset}`);

  const comments = await response.json();

  return comments;
};

const postComments = async (token, content) => {
  const response = await fetch(`${apiUrl}comments`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(content),
  });

  return response.json();
};

export { getComments, postComments };
