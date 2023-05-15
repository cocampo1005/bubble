import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { auth, googleProvider, facebookProvider, twitterProvider } from '../../firebase';
import { signInWithPopup } from '@firebase/auth';
import googleIcon from '../../assets/icons/google-g.png';
import facebookIcon from '../../assets/icons/facebook_f.png';
import twitterIcon from '../../assets/icons/twitter-bird.png';

function LoginPage() {

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithFacebook = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithTwitter = async () => {
        try {
            await signInWithPopup(auth, twitterProvider);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <section className="login">
            <div className="login__card">
                <h1 className='login__header'>Login</h1>
                <form className='login__form'>
                    {/* <div className='login__username input-container'>
                        <label className='login__username-label label'>USERNAME</label>
                        <input className='login__username-input input' type='text' ></input>
                    </div> */}
                    <div className='login__email input-container'>
                        <label className='login__email-label label'>EMAIL</label>
                        <input className='login__email-input input' type='text' ></input>
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
                <div className='signup__or-options'>
                    <motion.div
                        className='signup__or-options-google'
                        onClick={signInWithGoogle}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img className='signup__or-options-google-icon' src={googleIcon} alt='Google sign in logo' />
                    </motion.div>
                    <motion.div
                        className='signup__or-options-facebook'
                        onClick={signInWithFacebook}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img className='signup__or-options-facebook-icon' src={facebookIcon} alt='Facebook sign in logo' />
                    </motion.div>
                    <motion.div
                        className='signup__or-options-twitter'
                        onClick={signInWithTwitter}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img className='signup__or-options-twitter-icon' src={twitterIcon} alt='Twitter sign in logo' />
                    </motion.div>
                </div>
                <div className='login__footer'>
                    <p className='login__footer-text'>Don't have an account?</p>
                    <Link className='login__footer-link' to={'/signup'}>Sign Up</Link>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;