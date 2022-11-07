import React, { useState } from 'react'
import styles from '..//styles/Login.module.css';

/* Viktigt att ta in handleSubmit som prop i parantesen enligt nedan*/
function Form(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const note = {
        title: title,
        body: body
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('note', note)
    //     console.log('props', props);
    //     const addingNote = [...props.allNotes, note]
    //     console.log('allNotes', props.allNotes)
    //     console.log('addingNote', addingNote)
    //     return addingNote;
    // }

    // const handleSubmit = (e) => {
    //     setTitle('');
    //     setBody('');
    //     e.preventDefault();
    //     props.handleSubmit(note);
    //   }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('note', note)
    //     console.log('props', props);
    //     const addingNote = [...props.allNotes, note]
    //     console.log('allNotes', props.allNotes)
    //     console.log('addingNote', addingNote)
    //     return addingNote;
    // }

    // props.setAllNotes(...allNotes, addingNote);

    return (
        <div className={styles.formContainer}>
            {/* <form onSubmit={handleSubmit} */}
            <form onSubmit={(e) => {
                console.log(note);
                setTitle('')
                setBody('')
                e.preventDefault()
                props.handleSubmit(note)
            }}
                className={styles.form}>
                <div className={styles.input}>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        name="body"
                        value={body}
                        placeholder="body"
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Skicka</button>
            </form>
        </div>
    )
}

export default Form