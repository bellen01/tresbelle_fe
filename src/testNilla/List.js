import React from 'react'
import Note from './Note'

function List({ allNotes, setAllNotes }) {
    console.log('allNotes i List', allNotes)

    // const allNotesProps = allNotes;
    return (
        <div>
            {/* Nedan loopar igenom allNotes och skickar title, body och en key som props till Note-komponenten */}
            {allNotes.map((note) => (
                <Note title={note.title} body={note.body} key={note.title} />
            ))}
        </div>
    )
}

export default List