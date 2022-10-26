import React from 'react'
import { useState } from 'react'
import styles from '../styles/Login.module.css';

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    // const [loginDetails, setLoginDetails] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return (
        <div className={styles.formContainer}>
            <h2>Välkommen! Logga in nedan:</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.input}>
                    <input
                        type="email"
                        name="email"
                        // value={loginDetails.email || ''}
                        value={loginEmail}
                        placeholder="Email"
                        // onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="password"
                        name="pwd"
                        // value={loginDetails.pwd || ''}
                        value={loginPassword}
                        placeholder="Lösenord"
                        // onChange={(e) => setLoginDetails({ ...loginDetails, pwd: e.target.value })}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Logga in mig</button>
            </form>
        </div>
    )
}

export default Login
