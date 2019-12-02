import React    from 'react';
import ListItem from '../ListItem';

export default function ItemsList ( {
                                        items, onEditLabel, onDeleted,
                                        onToggleImportant, onToggleEdit,
                                        onToggleOmit
                                    } ) {

    const elements = items.map( ( item ) => {
        const { id } = item;

        return (
            <ListItem
                {...item}
                key={id}
                onEditLabel={onEditLabel}
                onDeleted={() => onDeleted( id )}
                onToggleEdit={() => onToggleEdit( id )}
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

