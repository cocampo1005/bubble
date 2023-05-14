import './Header.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logos/bubble-logo.png';
import bubbleAvatar from '../../assets/icons/bubble-avatar.png';

function Header() {
    return (
        <header className='header'>
            <Link className='header__logo--link' to={'/'}>
                <img className='header__logo' src={logo} alt='bubble logo' />
            </Link>
            <nav className='header__nav'>
                <input className='header__search' placeholder='Search 3D Models' />
                <div className='header__profile'>
                    <Link className='header__profile-login--link' to={'/login'}>
                        <motion.button
                            className='header__profile-login'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Login
                        </motion.button>
                    </Link>
                    <Link className='header__profile-avatar-link' to={'/profile'}>
                        <img className='header__profile-avatar' src={bubbleAvatar} alt='avatar' />
                    </Link>
                </div>
            </nav>
        </header>

    )
}

export default Header;