import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <ul >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/user/register'>Register</Link></li>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/'>Go To Quiz</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;