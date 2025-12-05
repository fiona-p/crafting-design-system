import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.navLink}>
        Home
      </Link>
      <Link to='/tabs' className={styles.navLink}>
        Tabs
      </Link>
    </nav>
  );
};

export default NavBar;
