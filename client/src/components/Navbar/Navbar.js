import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({auth}) => {

    let user;

    if (typeof auth === 'string') {
        if (auth.includes('firstName')) {
            user = JSON.parse(auth);
        }else{
            console.log('no Auth');
        }
    };

    return (
        <nav className={styles.navbar}>
            <ul >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/quiz/1'>Go To Quiz</Link></li>
                {user
                    ? <li><Link to='/user/logout'>Logout</Link></li>
                    : 
                    <>
                        <li><Link to='/user/register'>Register</Link></li>
                        <li><Link to='/user/login'>Login</Link></li>
                    </>}
            </ul>
        </nav>
    )
};

export default Navbar;