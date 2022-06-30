import { useState, useRef, memo } from 'react';
import style from './upload.module.css';
import useTokenStorage from '../../hooks/useTokenStorage';
import { searchUser } from '../../services/userService';
import { postImage, updateImage } from '../../services/imageService';

function UploadImage() {
  const [image, setImage] = useState();
  const imagePreview = useRef(null);
  const { token } = useTokenStorage();

  const readUrl = (imageInput) => {
    if (imagePreview && imageInput.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        imagePreview.current.setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(imageInput.target.files[0]);
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('image', image);

    await searchUser(token.token)
      .then((data) => data.json())
      .then((data) => {
        if (data.profileImage) {
          updateImage({ token: token.token, form });
        } else {
          postImage({ token: token.token, form })
            .then((imgData) => imgData.json())
            .catch((err) => console.warn(err));
        }
      })
      .catch((err) => console.warn(err));
  };

  return (
    <section>
      <form onSubmit={uploadImage}>
        { image && (<img src={image} className={style.previewImage} alt="" ref={imagePreview} />) }
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
            readUrl(e);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default memo(UploadImage);
