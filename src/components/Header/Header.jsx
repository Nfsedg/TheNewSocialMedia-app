import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../../context/TokenContext';
import styles from './header.module.css';
import img from '../../assets/social-ico.webp';

function Header() {
  const { token } = useContext(TokenContext);

  return (
    <header className={styles.headerwrapper}>
      <div className={styles.header}>
        <div>
          <Link to="/">
            <img src={img} alt="icon from social" />
          </Link>
        </div>
        <nav>
          <ul className={styles.header__navlist}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/groups">
              <li>Groups</li>
            </Link>
            <Link to="/login">
              {
                token
                  ? <li>Profile</li>
                  : <li>Login</li>
              }
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
