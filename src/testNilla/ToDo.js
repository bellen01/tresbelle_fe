import React, { useState } from 'react'
import Form from './Form';
import List from './List';

function ToDo() {
    const [allNotes, setAllNotes] = useState([{
        title: 'hej',
        body: 'test'
    }]);

    console.log('allNotes');

    return (
        <div>
            <div>
                {/* <Form allNotes={allNotes} setAllNotes={setAllNotes} /> */}
                <Form handleSubmit={note => setAllNotes([...allNotes, note])} />
            </div>
            <div>
                {/* <List allNotes={allNotes} setAllNotes={setAllNotes} /> */}
                <List allNotes={allNotes} setAllNotes={setAllNotes} />
            </div>
        </div>
    )
}

export default ToDo