import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LoginPage() {
    return (
        <section className="login">
            <div className="login__card">
                <h1 className='login__header'>Login</h1>
                <form className='login__form'>
                    <div className='login__username input-container'>
                        <label className='login__username-label label'>USERNAME</label>
                        <input className='login__username-input input' type='text' ></input>
                    </div>
                    <div className='login__password input-container'>
                        <label className='login__password-label label'>PASSWORD</label>
                        <input className='login__password-input input' type='text' ></input>
                    </div>
                    <motion.button
                        className='login__form-button'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        LOGIN WITH EMAIL
                    </motion.button>
                </form>
                <h4 className='login__or'>OR LOGIN WITH</h4>
                <div className='login__footer'>
                    <p className='login__footer-text'>Don't have an account?</p>
                    <Link className='login__footer-link' to={'/signup'}>Sign Up</Link>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;