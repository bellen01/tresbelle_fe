import React from 'react'
import styles from '../styles/Header.module.css'
import { Link, Route, Routes } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.logo}>TRES BELLE</div>
            <nav className={styles.navbar}>
                <div><Link to="/">Hem</Link></div>
                <div><Link to="/posters">Posters</Link></div>
                <div><Link to="/news">Nyheter</Link></div>
                <div><Link to="/bestsellers">Topplistan</Link></div>
            </nav>
            <nav className={styles.login}>
                <div>Sök</div>
                <div><Link to="/favorites">Favoriter</Link></div>
                <div><Link to="/cart">Varukorg</Link></div>
                <div><Link to="/login">Login</Link></div>
            </nav>
        </header>
    )
}

export default Header;