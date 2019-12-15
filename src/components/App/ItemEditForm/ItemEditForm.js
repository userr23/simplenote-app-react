import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ItemEditForm ( { id, label, onEditLabel, onToggleEdit } ) {

    const [ value, setValue ] = useState( label );

    const onSuccess = () => {
        if ( label === value ) {
            onToggleEdit( id );
        } else {
            onEditLabel( id, value );
            onToggleEdit( id );
        }
    };

    const onReset = () => {
        setValue( label );
        onToggleEdit( id );
    };

    return (
        <div className="edit-mode-container">
            <textarea
                value={value}
                placeholder="Type your note here"
                onChange={e => setValue( e.target.value )}
            />
            <div className="buttons-wrapper">
                <button type="button"
                        className="btn btn-success btn-sm"
                        onClick={onSuccess}>
                    <FontAwesomeIcon icon="check" />
                </button>
                <button type="button"
                        className="btn btn-danger btn-sm"
                        onClick={onReset}>
                    <FontAwesomeIcon icon="ban" />
                </button>
            </div>
        </div>
    );
}
