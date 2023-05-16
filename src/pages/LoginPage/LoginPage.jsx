import './LoginPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { auth, googleProvider, facebookProvider, twitterProvider } from '../../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from '@firebase/auth';
import googleIcon from '../../assets/icons/google-g.png';
import facebookIcon from '../../assets/icons/facebook_f.png';
import twitterIcon from '../../assets/icons/twitter-bird.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLoginEmailAndPassword = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
                navigate('/');
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
            })
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            // const user = userCredential.user;
            // dispatch({ type: 'LOGIN', payload: user })
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithFacebook = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            // const user = userCredential.user;
            // dispatch({ type: 'LOGIN', payload: user })
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithTwitter = async () => {
        try {
            await signInWithPopup(auth, twitterProvider);
            // const user = userCredential.user;
            // dispatch({ type: 'LOGIN', payload: user })
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <section className="login">
            <div className="login__card">
                <h1 className='login__header'>Login</h1>
                <form className='login__form' onSubmit={handleLoginEmailAndPassword}>
                    {/* <div className='login__username input-container'>
                        <label className='login__username-label label'>USERNAME</label>
                        <input className='login__username-input input' type='text' ></input>
                    </div> */}
                    <div className='login__email input-container'>
                        <label className='login__email-label label'>EMAIL</label>
                        <input 
                        className='login__email-input input' 
                        type='email' 
                        onChange={e=>setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className='login__password input-container'>
                        <label className='login__password-label label'>PASSWORD</label>
                        <input 
                        className='login__password-input input' 
                        type='password' 
                        onChange={e=>setPassword(e.target.value)}
                        ></input>
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