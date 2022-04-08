import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import LoginForm from '../components/LoginForm/LoginForm';

function Login() {
  const { token } = useContext(TokenContext);

  if (token) return <Navigate to={`/user/${token.username}`} />;

  return (
    <LoginForm />
  );
}

export default Login;
