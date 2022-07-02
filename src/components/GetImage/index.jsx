import PropType from 'prop-types';
import { useEffect, useState } from 'react';
import { getImage } from '../../services/imageService';
import useTokenStorage from '../../hooks/useTokenStorage';

export default function GetImage({ imageId }) {
  const [uri, setUri] = useState('');
  const [extension, setExtension] = useState('');
  const { token } = useTokenStorage();

  useEffect(() => {
    if (token) {
      getImage({ imageId })
        .then((data) => {
          setUri(data.thumb);
          setExtension(data.contentType);
        })
        .catch((e) => console.log(e));
    }
  }, [token]);

  if (!uri || !extension) return <h2>No profile image</h2>;

  return (
    <div>
      <img src={`data:image/${extension};base64,${uri}`} alt="" />
    </div>
  );
}

GetImage.propTypes = {
  imageId: PropType.string.isRequired,
};
