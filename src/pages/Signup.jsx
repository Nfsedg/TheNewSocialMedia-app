import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import SignupForm from '../components/SignupForm';

function Signup() {
  const { token } = useContext(TokenContext);

  if (token) return <Navigate to={`/user/${token.username}`} />;

  return (
    <SignupForm />
  );
}

export default Signup;
