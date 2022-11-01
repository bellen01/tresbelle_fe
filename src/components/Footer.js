import React from 'react';
import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactContainer}>
                <div className={styles.contact}>
                    <div>08-11 11 11</div>
                    <div>hello@tresbelle.com</div>
                </div>
            </div>
            <div className={styles.logo}><Link to="/">Tres Belle</Link></div>
            <div className={styles.socialContainer}>Följ oss
                <div className={styles.social}>
                    <div><i className="bi bi-instagram"></i></div>
                    <div><i className="bi bi-facebook"></i></div>
                    {/* <div><i className="bi bi-envelope-fill"></i></div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer