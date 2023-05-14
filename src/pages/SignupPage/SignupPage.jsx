import './SignupPage.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function SignupPage() {
    return (
        <section className="signup">
            <div className="signup__card">
                <h1 className='signup__header'>Sign Up</h1>
                <form className='signup__form'>
                <div className='signup__email input-container'>
                        <label className='signup__email-label label'>EMAIL</label>
                        <input className='signup__email-input input' type='text' ></input> 
                    </div>
                    <div className='signup__username input-container'>
                        <label className='signup__username-label label'>USERNAME</label>
                        <input className='signup__username-input input' type='text' ></input> 
                    </div>
                    <div className='signup__password input-container'>
                        <label className='signup__password-label label'>PASSWORD</label>
                        <input className='signup__password-input input' type='text' ></input> 
                    </div>
                    <motion.button
                        className='signup__form-button'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        SIGN UP WITH EMAIL
                    </motion.button>
                </form>
                <h4 className='signup__or'>OR SIGN UP WITH</h4>
                <div className='signup__footer'>
                    <p className='signup__footer-text'>Have an account already? </p>
                    <Link 
                    className='signup__footer-link' to={'/login'}>Login</Link>
                </div>
            </div>
        </section>
    )
}

export default SignupPage;