import React    from 'react';
import ListItem from '../ListItem';

export default function ItemsList ( {
                                        items, onEdit, onDeleted,
                                        onToggleImportant,
                                        onToggleOmit
                                    } ) {

    const elements = items.map( ( item ) => {
        const { id } = item;

        return (
            <ListItem
                {...item}
                key={id}
                onEdit={() => onEdit( id )}
                onDeleted={() => onDeleted( id )}
                onToggleImportant={() => onToggleImportant( id )}
                onToggleOmit={() => onToggleOmit( id )}
            />
        );
    } );

    return (
        <ul className="list-group items-list">
            {elements}
        </ul>
    );
}

