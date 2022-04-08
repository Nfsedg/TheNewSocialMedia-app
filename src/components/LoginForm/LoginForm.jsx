import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../../context/TokenContext';
import loginService from '../../services/loginService';
import style from './loginForm.module.css';

function LoginForm() {
  const { token, setToken } = useContext(TokenContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userLogin = {
      username,
      password,
    };

    setUsername('');
    setPassword('');

    try {
      const response = await loginService(userLogin);
      setToken(response);
    } catch (err) {
      setError(err.message);
    }
  };

  if (token) {
    return (
      <p>
        Login as
        {' '}
        <span>
          {token.username}
        </span>
      </p>
    );
  }

  return (
    <div className={style.loginWrapper}>
      <h1>Log in to your account</h1>
      <span style={{ color: 'red' }}>{error}</span>
      <p>Enter your username and password</p>
      <form onSubmit={handleSubmit} className={style.formWrapper}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <div>
        <p>
          Don&apos;t have an account yet?
          {' '}
          <span><Link to="/signup"> Sign up</Link></span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
