import React          from 'react';
import FormActionLine from '../../../FormActionLine';

export default function ItemStatusFilter ( { filter, onFilterChange } ) {
    const buttonTypes = [
        { name: 'all', label: 'All' },
        { name: 'export', label: 'To export' },
        { name: 'omit', label: 'Omit' },
        { name: 'important', label: 'Important' },
        { name: 'edited', label: 'Edited' }
    ];

    const actions = buttonTypes.map( ( { name, label } ) => {
        const isActive    = filter === name;
        const buttonClass = isActive ? 'info' : 'outline-secondary';
        return ( {
            id      : name,
            type    : buttonClass,
            text    : label,
            onClick : () => {
                onFilterChange( name );
            },
            disabled: false
        } );
    } );

    return (
        <FormActionLine
            actions={actions}
        />
    );
}
