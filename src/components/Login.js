import React from 'react'
import { useState } from 'react'
import styles from '../styles/Login.module.css';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginSuccessOrFailureMessage, setLoginSuccessOrFailureMessage] = useState('');
    //jwt stuff
    // let navigate = useNavigate();
    // const location = useLocation()

    // const [loginStatus, setLoginStatus] = useState(false);

    const checkIfUserExist = async (loginData) => {
        try {
            const response = await fetch('http://localhost:3005/login', {
                method: 'POST',
                body: JSON.stringify(loginData),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Email eller lösenord är fel, vänligen försök igen');
                } else {
                    throw new Error('Något gick fel men det är inte du - det är vi. Vänligen försök igen senare.');
                }
            }

            const data = await response.json();
            const loggedInUserName = data.firstName;
            // setLoginStatus(true); //jwt stuff
            setLoginSuccessOrFailureMessage('Du är inloggad!')
            //jwt stuff
            // if (location.state?.from) {
            //     // navigate('/profilepage')
            //     navigate(location.state.from)
            // }

        } catch (error) {
            console.log('Login failed', error);
            // setLoginStatus(false); //jwt stuff
            setLoginSuccessOrFailureMessage(error.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = loginEmail.trim();
        const loginData = {
            email: email,
            password: loginPassword
        }
        checkIfUserExist(loginData);
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
            <div>{loginSuccessOrFailureMessage}</div>
            {/* <div>{loginStatus}</div> */}
            <p className={styles.registerLink}><Link to="/register">Eller registrera dig här!</Link></p>
        </div>
    )
}

export default Login
