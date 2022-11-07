import React from 'react'
import Note from './Note'

function List({ allNotes, setAllNotes }) {
    console.log('allNotes i List', allNotes)

    const allNotesProps = allNotes;
    return (
        <div>
            <ul>
                <li>
                    {allNotesProps.map((note) => (
                        <Note title={note.title} body={note.body} key={note.title} />
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default List