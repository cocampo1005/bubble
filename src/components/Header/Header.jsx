import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logos/bubble-logo.png';
import bubbleAvatar from '../../assets/icons/bubble-avatar.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';

function Header() {

    const { currentUser, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch({ type: 'LOGOUT', payload: {} })
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <header className='header'>
            <Link className='header__logo--link' to={'/'}>
                <motion.img
                    className='header__logo'
                    src={logo}
                    alt='bubble logo'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                />
            </Link>
            <nav className='header__nav'>
                <input className='header__search' placeholder='Search 3D Models' />
                <div className='header__profile'>

                    {!currentUser ?
                        <Link className='header__profile-login--link' to={'/login'}>
                            <motion.button
                                className='header__profile-login'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Login
                            </motion.button>
                        </Link>
                        :
                        <motion.button
                            className='header__profile-logout'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLogout}
                        >
                            Logout
                        </motion.button>
                    }

                    <Link className='header__profile-avatar-link' to={'/profile'}>
                        <img className='header__profile-avatar' src={bubbleAvatar} alt='avatar' />
                    </Link>
                </div>
            </nav>
        </header>

    )
}

export default Header;