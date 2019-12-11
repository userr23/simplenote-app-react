import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Form            from './Form';
import FormActionLine  from './FormActionLine';


export default function EditForm ( { label, placeholder, onChange, onSuccess, onReset } ) {

    return (
        <div className="edit-mode-container">
            <textarea
                value={label}
                placeholder={placeholder}
                onChange={onChange}
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

