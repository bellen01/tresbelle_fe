import React, { useState, useEffect } from 'react'
import NavbarFilter from './NavbarFilter'
import styles from '../styles/Posters.module.css';
import { Link } from 'react-router-dom';

function Products() {
    const [posters, setPosters] = useState([]);

    const getProducts = async () => {
        const response = await fetch('http://localhost:3005');
        const data = await response.json();
        console.log(data);
        return setPosters(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <main className={styles.postersContainer}>
            <div className={styles.navbarContainer}>
                <NavbarFilter />
            </div>
            <div className={styles.posters}>
                <h2>Alla posters</h2>
                {posters.map((poster) => (
                    <div key={poster.id}>
                        <Link to={`/products/${poster.id}`}>
                            <p>{poster.data.title}</p>
                            <p>Från 54 kr</p>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Products