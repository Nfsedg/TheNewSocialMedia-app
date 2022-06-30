import { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import ProfileForm from '../components/ProfileForm';
import GetImage from '../components/GetImage';

function User() {
  const { username } = useParams();
  const { setToken, token } = useContext(TokenContext);

  const logoutHandler = () => {
    window.localStorage.removeItem('TOKEN_USER_SOCIAL');
    setToken('');
  };

  if (!token) return <Navigate to="/login" />;

  return (
    <main>
      <GetImage />
      <h1>{username.toUpperCase()}</h1>
      <button type="button" onClick={logoutHandler}>Logout</button>

      <ProfileForm />
    </main>
  );
}

export default User;
