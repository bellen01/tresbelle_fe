import React, { useState } from 'react'
import styles from '../styles/Register.module.css';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');


    return (
        <div className={styles.formContainer}>
            <h2>Skapa ditt konto nedan:</h2>
            <form className={styles.form}>
                <div className={`${styles.email}`}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="Förnamn"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Efternamn"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="password"
                        name="pwd"
                        value={password}
                        placeholder="Lösenord"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="password"
                        name="pwd"
                        value={password2}
                        placeholder="Upprepa lösenord"
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Registera</button>
            </form>
        </div>
    )
}

export default Register