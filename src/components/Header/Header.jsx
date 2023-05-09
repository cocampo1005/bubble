import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <h1 className='header__logo'>bubble</h1>
            <nav className='header__nav'>
                <input className='header__search' placeholder='Search 3D Models' />
                <div className='header__profile'>
                    <button className='header__profile-login'>Login</button>
                    <div className='header__profile-avatar'></div>
                </div>
            </nav>
        </header>

    )
}

export default Header;