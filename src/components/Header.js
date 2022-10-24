import React from 'react'
import styles from '../styles/Header.module.css'
import { Link, Route, Routes } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header} >
            <div>Tres Belle</div>
            <nav className={styles.navbar}>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/posters">Posters</Link></div>
                <div><Link to="/login">Login</Link></div>
            </nav>
        </header>
    )
}

export default Header;