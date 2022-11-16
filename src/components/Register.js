import React, { useState } from 'react'
import styles from '../styles/Register.module.css';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [matchingPasswordError, setMatchingPasswordError] = useState('');
    const [successOrFailureMessage, setSuccessOrFailureMessage] = useState('')

    const validEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z0-9]+$');
    const validPassword = new RegExp('^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$');

    const validate = (email) => {
        let valid = true;
        if (!validEmail.test(email)) {
            setEmailError('Email måste innehålla @ och punkt');
            valid = false;
        }
        if (!validPassword.test(password)) {
            setPasswordError('Lösenord måste ha minst 8 tecken, en stor bokstav och en siffra');
            valid = false;
        }
        if (password !== password2) {
            setMatchingPasswordError('Lösenorden matchar inte');
            valid = false;
        }
        return valid;
    }

    const sendInputToBackend = async (inputData) => {
        try {
            const response = await fetch('http://localhost:3005/register', {
                method: 'POST',
                body: JSON.stringify(inputData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                if (response.status === 406) {
                    throw new Error('Den email du angett är redan registrerad, välj en annan eller logga in nedan.');
                } else {
                    throw new Error('Något gick fel, det är inte du - det är vi. Vänligen försök igen senare.');
                }
            }
        } catch (error) {
            console.log('Failed to post', error);
            setSuccessOrFailureMessage(error.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        setMatchingPasswordError('');
        setSuccessOrFailureMessage('');

        const firstNameTrimmed = firstName.trim();
        const lastNameTrimmed = lastName.trim();
        const emailTrimmed = email.trim();

        const validInput = validate(emailTrimmed);

        if (validInput) {
            const inputData = {
                firstName: firstNameTrimmed,
                lastName: lastNameTrimmed,
                email: emailTrimmed,
                password: password
            }
            sendInputToBackend(inputData);
        }
    }

    return (
        <div className={styles.formContainer}>
            <h2>Skapa ditt konto nedan:</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                <div>{emailError}</div>
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
                <div>{passwordError}</div>
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
                <div>{matchingPasswordError}</div>
                <button type="submit" className={styles.submitButton}>Registera</button>
                <p>{successOrFailureMessage}</p>
            </form>
        </div>
    )
}

export default Register