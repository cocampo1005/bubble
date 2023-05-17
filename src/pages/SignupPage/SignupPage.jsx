import './SignupPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { auth, googleProvider, facebookProvider, twitterProvider, db } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { useContext, useState } from 'react';
import successIcon from '../../assets/icons/successful-icon-blue.svg';
import googleIcon from '../../assets/icons/google-g.png';
import facebookIcon from '../../assets/icons/facebook_f.png';
import twitterIcon from '../../assets/icons/twitter-bird.png';
import { AuthContext } from '../../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';


function SignupPage() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [successfulReg, setSuccessfulReg] = useState(false);

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const validateEmail = (email) => {
        const emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegEx.test(email);
    }

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
                console.log('Passwords does not match');
            }
        }
        return isValid
    }

    const createUserDocument = async (user) => {
        console.log("Creating user document for user:", user);
        console.log("Username:", username);  // Log the username here
        console.log("Firestore instance:", db);
        try {
            const docRef = doc(db, "users", user.uid);
            console.log("Document reference:", docRef);
            await setDoc(docRef, {
                username
            });
            console.log("User document created.");
        } catch (err) {
            console.error('Error creating user document', err);
        }
    };


    const handleLogin = (res) => {
        dispatch({ type: 'LOGIN', payload: res.user });
        setSuccessfulReg(true);
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }

    const register = async (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');

        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            return;
        }

        if (!validatePassword()) {
            setPasswordError('Passwords do not match');
            return;
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created with email and password:", res.user);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            await createUserDocument(res.user);
            handleLogin(res);
        } catch (err) {
            console.error('Error registering user', err.message);
        }
    }


    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            createUserDocument(res.user);
            handleLogin(res);
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithFacebook = async () => {
        try {
            const res = await signInWithPopup(auth, facebookProvider);
            createUserDocument(res.user);
            handleLogin(res);
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithTwitter = async () => {
        try {
            const res = await signInWithPopup(auth, twitterProvider);
            createUserDocument(res.user);
            handleLogin(res);
        } catch (err) {
            console.error(err);
        }
    }

    if (successfulReg) return (
        <motion.div
            className='successful-reg'>
            <h1 className='successful-reg__heading'>Registration Successful!</h1>
            <img className='successful-reg__icon' src={successIcon} />

        </motion.div>
    )

    return (
        <section className="signup">
            <div className="signup__card">
                <h1 className='signup__header'>Sign Up</h1>
                <form className='signup__form' onSubmit={register} name='signupForm'>
                    <div className='signup__email input-container'>
                        <label className='signup__email-label label'>EMAIL</label>
                        <input
                            className={`signup__email-input input ${emailError ? 'input-error' : ''}`}
                            name='email'
                            type='email'
                            placeholder='john_doe@gmail.com'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className='signup__username input-container'>
                        <label className='signup__username-label label'>USERNAME</label>
                        <input
                            className='signup__username-input input'
                            name='username'
                            type='text'
                            placeholder='johndoe67'
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div className='signup__password input-container'>
                        <label className='signup__password-label label'>PASSWORD</label>
                        <input
                            className={`signup__password-input input ${passwordError ? 'input-error' : ''}`}
                            name='password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className='signup__password-confirm input-container'>
                        <label className='signup__password-confirm-label label'>CONFIRM PASSWORD</label>
                        <input
                            className={`signup__password-confirm-input input ${passwordError ? 'input-error' : ''}`}
                            name='confirmPassword'
                            type='password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        ></input>
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