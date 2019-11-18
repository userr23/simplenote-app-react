import React from 'react';

import NotesListItem from '../../NotesListItem';

const NotesList = ( { notes, onDeleted,
                   onToggleImportant,
                   onToggleDone} ) => {

    const elements = notes.map( ( item ) => {

        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <NotesListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
            </li>
        );
    } );

    return (
        <ul className="list-group notes-list">
            {elements}
        </ul>
    );
};

export default NotesList;

