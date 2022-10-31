import React from 'react'
import styles from '../styles/Login.module.css'

function Note({ title, body }) {

    return (
        <div className={styles.formContainer}>
            <h3>
                {title}
            </h3>
            <p>
                {body}
            </p>
        </div>
    )
}

export default Note