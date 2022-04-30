import { useState } from 'react';

function UploadImage() {
  // const[image, setImage] = useState();
//   const ctx = CanvasRenderingContext2D();
//   const imagePreview = ctx.drawImage(image, 0, 0);

  const uploadImage = (e) => { setImage(e.target.files[0]); };
  return (
    <section>
      <form>
        <input type="file" name="newImage" accept="image/*" onChange={uploadImage} />
      </form>
    </section>
  );
}

export default UploadImage;
