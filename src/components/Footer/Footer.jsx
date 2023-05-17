import React from 'react'
import './Footer.scss';
import { motion } from 'framer-motion';
import logo from '../../assets/logos/bubble-logo.png';
import twitterIcon from '../../assets/icons/twitter-footer-icon.svg';
import facebookIcon from '../../assets/icons/facebook-footer-icon.svg';
import instagramIcon from '../../assets/icons/instagram-footer-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-footer-icon.svg';
import behanceIcon from '../../assets/icons/behance-footer-icon.svg';


export default function Footer() {
    return (
        <div className='footer'>
            <p className='footer__copyright'>© 2023, bubble, Inc. All rights reserved.</p>
            <motion.img
                className='footer__logo'
                src={logo}
                alt='bubble logo'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            />
            <div className='footer__socials'>
                <a className='footer__socials-link' href='https://twitter.com/ChristianO_Dev' target="_blank">
                    <motion.img
                        className='footer__socials-icon'
                        src={twitterIcon}
                        alt='twitter socials link'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </a>
                <a className='footer__socials-link' href='https://www.facebook.com/cocampo10' target="_blank">
                    <motion.img
                        className='footer__socials-icon'
                        src={facebookIcon}
                        alt='Facebook socials link'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </a>
                <a className='footer__socials-link' href='https://www.instagram.com/christiano_dev/' target="_blank">
                    <motion.img
                        className='footer__socials-icon'
                        src={instagramIcon}
                        alt='Instagram socials link'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </a>
                <a className='footer__socials-link' href='https://www.linkedin.com/in/christianojocampo/' target="_blank">
                    <motion.img
                        className='footer__socials-icon'
                        src={linkedinIcon}
                        alt='linkedin socials link'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </a>
                <a className='footer__socials-link' href='https://www.behance.net/colombianp4cb7' target="_blank">
                    <motion.img
                        className='footer__socials-icon'
                        src={behanceIcon}
                        alt='behance socials link'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </a>
            </div>
        </div>
    )
}
