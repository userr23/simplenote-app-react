import React from 'react';

import ListItem from '../ListItem';

export default function ItemsList ( {
                                        items, onDeleted,
                                        onToggleImportant,
                                        onToggleOmit
                                    } ) {

    const elements = items.map( ( item ) => {

        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <ListItem
                    {...itemProps}
                    onDeleted={() => onDeleted( id )}
                    onToggleImportant={() => onToggleImportant( id )}
                    onToggleOmit={() => onToggleOmit( id )}
                />
            </li>
        );
    } );

    return (
        <ul className="list-group items-list">
            {elements}
        </ul>
    );
}

