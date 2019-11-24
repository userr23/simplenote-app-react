import React from 'react';

export default function ItemStatusFilter ( { filter, onFilterChange } ) {
    const buttonTypes = [
        { name: 'all', label: 'All' },
        { name: 'print', label: 'Print' },
        { name: 'omit', label: 'Omit' },
        { name: 'important', label: 'Important' }
    ];

    const buttons = buttonTypes.map( ( { name, label } ) => {
        const isActive    = filter === name;
        const buttonClass = isActive ? 'btn-success' : 'btn-outline-secondary';
        return (
            <button type="button"
                    className={`btn ${buttonClass}`}
                    key={name}
                    onClick={() => onFilterChange( name )}
            >
                {label}
            </button>
        );
    } );

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}
