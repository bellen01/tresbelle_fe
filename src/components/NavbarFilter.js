import React from 'react'
import styles from '../styles/NavbarFilter.module.css';

function NavbarFilter() {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div>Alla</div>
                <div>Blad och växter</div>
                <div>Djur och insekter</div>
                <div>Naturmotiv</div>
                <div>Svartvitt</div>
                <div>Texter</div>
            </nav>
        </div>
    )
}

export default NavbarFilter