import { useState } from 'react';
import { editUser } from '../../services/userService';
import useTokenStorage from '../../hooks/useTokenStorage';
import UploadImage from '../UploadImage';

const userInitialState = {
  name: '',
  biography: '',
};

export default function ProfileForm() {
  const [userData, setUserData] = useState(userInitialState);
  const { token } = useTokenStorage();

  const submitHandler = (e) => {
    e.preventDefault();

    const userUpdateData = {
      name: userData.name,
      biography: userData.biography,
    };

    editUser(userUpdateData, token.token)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setUserData(userInitialState);
  };

  const onChangeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <div>
        <h2>Edit profile</h2>
      </div>
      <UploadImage />
      <form onSubmit={submitHandler}>
        <label htmlFor="name" aria-label="name">Name</label>
        <input type="text" id="name" name="name" value={userData.name} onChange={onChangeHandler} />
        <label htmlFor="biography" aria-label="biography">biography</label>
        <input type="text" id="biography" name="biography" value={userData.biography} onChange={onChangeHandler} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
