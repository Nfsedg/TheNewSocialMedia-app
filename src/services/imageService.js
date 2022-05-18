const apiUrl = process.env.REACT_APP_API_URL;
// Working on API endpoints
const getImage = async () => {
  const response = await fetch(`${apiUrl}upload`);

  return response.blob();
};

export default getImage;
