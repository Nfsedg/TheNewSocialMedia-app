import { useState, useRef } from 'react';
import style from './upload.module.css';

function UploadImage() {
  const [image, setImage] = useState();
  const imagePreview = useRef(null);

  const readUrl = (imageInput) => {
    if (imagePreview && imageInput.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        imagePreview.current.setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(imageInput.target.files[0]);
    }
  };

  const uploadImage = (e) => {
    e.preventDefault();

    // Working on API for endpoint for upload images
    // const form = new FormData();
    // form.append('image', image);

    // fetch('http://localhost:3005/upload', {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: form,
    // })
    //   .then((data) => data.json())
    //   .catch((err) => console.warn(err));
  };

  return (
    <section>
      <p style={{ color: 'red' }}>Still working on endpoint to upload profile picture feature</p>
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

export default UploadImage;
