import React    from 'react';
import ListItem from '../ListItem';

export default function ItemsList ( {
                                        items, onDeleted,
                                        onToggleImportant,
                                        onToggleOmit
                                    } ) {

    const elements = items.map( ( item ) => {
        const { id } = item;

        return (
            <ListItem
                {...item}
                key={id}
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

