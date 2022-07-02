import { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import DefaultProfileImage from '../components/DefaultProfileImage';
import useLoggedUser from '../hooks/useLoggedUser';
import ProfileForm from '../components/ProfileForm';
import GetImage from '../components/GetImage';

function User() {
  const { username } = useParams();
  const { setToken, token } = useContext(TokenContext);
  const { userInfo } = useLoggedUser(token.token);

  const logoutHandler = () => {
    window.sessionStorage.removeItem('TOKEN_USER_SOCIAL');
    setToken('');
  };

  if (!token) return <Navigate to="/login" />;

  return (
    <main>
      {userInfo.profileImage
        ? <GetImage imageId={userInfo.profileImage} />
        : <DefaultProfileImage />}
      <h1>
        Username:
        {' '}
        {username.toUpperCase()}
      </h1>
      <button type="button" onClick={logoutHandler}>Logout</button>

      <ProfileForm />
    </main>
  );
}

export default User;
