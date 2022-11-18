import React from 'react'
import styles from '../styles/Header.module.css'
import { Link, Route, Routes } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.logo}><Link to="/">Tres Belle</Link></div>
            {/* <div className={styles.logo}><Link to="/">TRES BELLE</Link></div> */}
            <nav className={styles.navbar}>
                <div><Link to="/">Hem</Link></div>
                <div><Link to="/products">Posters</Link></div>
                <div><Link to="/news">Nyheter</Link></div>
                <div><Link to="/bestsellers">Topplistan</Link></div>
            </nav>
            <nav className={styles.login}>
                <div><i className="bi bi-search"></i></div>
                <div><Link to="/favorites"><i className="bi bi-suit-heart"></i></Link></div>
                {/* <div><Link to="/favorites"><i className="bi bi-suit-heart-fill"></i></Link></div> */}
                <div><Link to="/cart"><i className="bi bi-bag-fill"></i></Link></div>
                <div><Link to="/login"><i className="bi bi-person-circle"></i></Link></div>
            </nav>
        </header>
    )
}

export default Header;