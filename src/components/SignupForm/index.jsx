import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../services/userService';
import style from './signupForm.module.css';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      password,
      name,
    };

    try {
      await createUser(newUser);
    } catch (err) {
      setError('Invalid information');
    }
    setUsername('');
    setName('');
    setPassword('');
  };

  return (
    <div className={style.signupWrapper}>
      <h1>Create an account</h1>
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <br />
      <form onSubmit={submitHandler} className={style.formWrapper}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?
        {' '}
        <span><Link to="/login">Log in</Link></span>
      </p>
    </div>
  );
}

export default SignupForm;
