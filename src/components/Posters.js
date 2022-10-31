import React from 'react'
import NavbarFilter from './NavbarFilter'
import styles from '../styles/Posters.module.css';

function Posters() {
    return (
        <div className={styles.postersContainer}>
            <div className={styles.navbarContainer}>
                <NavbarFilter />
            </div>
            <div className={styles.posters}>Posters</div>
        </div>
    )
}

export default Posters