import React, { useState, useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])

    const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))

        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <h1>Notes</h1>
            <NoteList notes={notes} removeNote={removeNote}/>
            <AddNoteForm dispatch={dispatch}/>
        </div>
    )
}

export { NoteApp as default }