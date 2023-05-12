import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link className='header__logo--link' to={'/'}>
                <h1 className='header__logo'>bubble</h1>
            </Link>
            <nav className='header__nav'>
                <input className='header__search' placeholder='Search 3D Models' />
                <div className='header__profile'>
                    <Link className='header__profile-login--link' to={'/login'}>
                        <button className='header__profile-login'>Login</button>
                    </Link>
                    <Link className='header__profile-avatar-link' to={'/profile'}>
                        <div className='header__profile-avatar'></div>
                    </Link>
                </div>
            </nav>
        </header>

    )
}

export default Header;