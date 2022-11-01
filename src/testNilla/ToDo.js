//Som index.js (Home)

import React, { useState } from 'react'
import Form from './Form';
import List from './List';

function ToDo() {
    const [allNotes, setAllNotes] = useState([{
        title: 'hej',
        body: 'test'
    }]);


    return (
        <div>
            <div>
                <Form handleSubmit={note => setAllNotes([...allNotes, note])} /> {/* detta kallas för en callback, här skickas funktionen handleSubmit ner till Form-komponenten */}
            </div>
            <div>
                <List allNotes={allNotes} setAllNotes={setAllNotes} /> {/* Här skickas useStatet ner till List-komponenten */}
            </div>
        </div>
    )
}

export default ToDo