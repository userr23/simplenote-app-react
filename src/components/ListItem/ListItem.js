import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItem ( {
                                       id, label, onDeleted, onEditLabel,
                                       onToggleImportant,
                                       onToggleOmit, onToggleEdit, edit,
                                       omit, important, added, edited
                                   } ) {

    const [ value, setValue ] = useState( label );

    let labelClassNames = 'list-item';
    let footerClassName = '';
    let itemClassNames  = 'list-group-item';
    let buttonOmitIcon  = 'times';
    let buttonImportantClassName  = 'btn btn-outline-warning btn-sm';
    let buttonEditIcon  = 'edit';
    let labelContainer;

    const onEdit = () => {
        if ( !edit ) {
            onToggleEdit( id );
        }
    };

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


    if ( omit ) {
        itemClassNames += ' omit';
        buttonOmitIcon = 'print';
    }
    if ( important ) {
        itemClassNames += ' important';
        labelClassNames += ' important';
        buttonImportantClassName = 'btn btn-warning btn-sm';
    }

    if ( edit ) {
        itemClassNames += ' edit';
        footerClassName = 'invisible';
        buttonEditIcon  = 'check';
    }

    if ( edit ) {
        labelContainer = ( <div className="edit-mode-container">
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
        </div> );
    } else {
        labelContainer = <span className={labelClassNames}>{label}</span>;

    }

    return (
        <li id={id} className={itemClassNames}>
            {labelContainer}

            <div className={footerClassName}>
                <hr />
                <div className="settings-block">
                    <span>
                    Added: {added}
                    </span>
                    {edited &&
                    <span>
                    Edited: {edited}
                    </span>}
                    <div className="buttons-wrapper">
                        <button type="button"
                                className="btn btn-outline-success btn-sm"
                                onClick={onEdit}>
                            <FontAwesomeIcon icon={buttonEditIcon} />
                        </button>

                        <button type="button"
                                className={buttonImportantClassName}
                                onClick={onToggleImportant}>
                            <FontAwesomeIcon icon="exclamation" />
                        </button>

                        <button type="button"
                                title="Omit"
                                className="btn btn-outline-secondary btn-sm"
                                onClick={onToggleOmit}>
                            <FontAwesomeIcon icon={buttonOmitIcon} />
                        </button>

                        <button type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={onDeleted}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}
